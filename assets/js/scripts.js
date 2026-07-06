var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    var opening = !menuContainer.classList.contains('open');
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
    if (opening) {
        var first = menuContainer.querySelector('a');
        if (first) first.focus();
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuContainer.classList.contains('open')) {
        menuContainer.classList.remove('open');
        menuTrigger.classList.remove('is-active');
        body.classList.remove('lock-scroll');
        menuTrigger.focus();
    }
    if (e.key === 'Tab' && menuContainer.classList.contains('open')) {
        var focusable = menuContainer.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
});

// ── Chat Widget ────────────────────────────────────────────

(function() {
    var fab = document.getElementById('chat-fab');
    var widget = document.getElementById('chat-widget');
    var minimize = document.getElementById('chat-minimize');
    var messagesEl = document.getElementById('chat-messages');
    var inputEl = document.getElementById('chat-input');
    var sendBtn = document.getElementById('chat-send');
    if (!fab || !widget || !minimize || !messagesEl || !inputEl || !sendBtn) return;

    var state = 'init';
    var userName = '';
    var userTopic = '';
    var userExtra = '';
    var userEmail = '';

    // Toggle chat open/close
    fab.addEventListener('click', function() {
        widget.classList.toggle('open');
        if (widget.classList.contains('open')) {
            inputEl.focus();
            scrollToBottom();
        }
    });

    minimize.addEventListener('click', function() {
        widget.classList.remove('open');
    });

    function addMessage(text, sender) {
        var div = document.createElement('div');
        div.className = 'chat-msg ' + sender;
        var bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.appendChild(document.createTextNode(text));
        div.appendChild(bubble);
        messagesEl.appendChild(div);
        scrollToBottom();
    }

    function scrollToBottom() {
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function showTyping() {
        if (document.getElementById('chat-typing')) return;
        var div = document.createElement('div');
        div.className = 'chat-msg bot typing';
        div.id = 'chat-typing';
        var bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
        div.appendChild(bubble);
        messagesEl.appendChild(div);
        scrollToBottom();
    }

    function hideTyping() {
        var el = document.getElementById('chat-typing');
        if (el) el.remove();
    }

    function botRespond(text, delay) {
        delay = delay || 800;
        showTyping();
        setTimeout(function () {
            hideTyping();
            addMessage(text, 'bot');
        }, delay);
    }

    function addStatusMessage(html) {
        var div = document.createElement('div');
        div.className = 'chat-done';
        div.innerHTML = html;
        messagesEl.appendChild(div);
        scrollToBottom();
    }

    function submitToGitHub() {
        showTyping();

        var token = window.GITHUB_TOKEN || '';

        if (!token) {
            hideTyping();
            addStatusMessage('<div class="chat-status error">⚠️ Chat backend not configured. <a href="mailto:deekshakalia14@gmail.com">Email me directly →</a></div>');
            return;
        }

        var repo = window.GITHUB_REPO || 'deekshakalia/deekshakalia.github.io';
        var endpoint = 'https://api.github.com/repos/' + repo + '/issues';
        var extras = userExtra ? '\n\n**Anything else:**\n' + userExtra : '';
        var body = '**Name:** ' + userName + '\n**Email:** ' + userEmail + '\n\n**Message:**\n' + userTopic + extras;

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Authorization': 'token ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
                title: 'Portfolio Contact: ' + userName,
                body: body,
                labels: ['contact']
            })
        }).then(function (res) {
            hideTyping();
            if (res.ok) {
                addStatusMessage('<div class="chat-status success">✅ Message sent! I\'ll get back to you soon.</div>');
            } else {
                addStatusMessage('<div class="chat-status error">⚠️ Couldn\'t send. <a href="mailto:deekshakalia14@gmail.com">Email me directly →</a></div>');
            }
        }).catch(function () {
            hideTyping();
            addStatusMessage('<div class="chat-status error">⚠️ Couldn\'t send. <a href="mailto:deekshakalia14@gmail.com">Email me directly →</a></div>');
        });
    }

    function handleUserInput(text) {
        text = text.trim();
        if (!text || state === 'done') return;
        inputEl.value = '';
        addMessage(text, 'user');

        switch (state) {
            case 'init':
            case 'greeting':
                state = 'ask_name';
                botRespond("Awesome! What's your name?");
                break;
            case 'ask_name':
                userName = text;
                state = 'ask_topic';
                botRespond("Nice to meet you, " + userName + "! What's on your mind? (collaboration, job opp, or just saying hi)");
                break;
            case 'ask_topic':
                userTopic = text;
                state = 'ask_extra';
                botRespond("Anything else you'd like to add?");
                break;
            case 'ask_extra':
                userExtra = text;
                state = 'ask_email';
                botRespond("Got it! What's your email so I can get back to you?");
                break;
            case 'ask_email':
                userEmail = text;
                state = 'done';
                inputEl.disabled = true;
                sendBtn.disabled = true;
                botRespond("Thanks " + userName + "! Sending your message now...", 600);
                setTimeout(submitToGitHub, 1800);
                break;
        }
    }

    function openAndGreet() {
        widget.classList.add('open');
        setTimeout(function () {
            addMessage("\uD83D\uDC4B Hey! Want to work together or just chat? Drop a message below!", 'bot');
            state = 'greeting';
            inputEl.focus();
        }, 600);
    }

    // Open and greet on first click
    var greeted = false;
    fab.addEventListener('click', function() {
        if (!greeted) {
            greeted = true;
            // Delay greeting to let modal animation finish
            setTimeout(function () {
                addMessage("\uD83D\uDC4B Hey! Want to work together or just chat? Drop a message below!", 'bot');
                state = 'greeting';
                inputEl.focus();
            }, 400);
        }
    });

    sendBtn.addEventListener('click', function () {
        handleUserInput(inputEl.value);
    });

    inputEl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleUserInput(inputEl.value);
        }
    });
})();

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

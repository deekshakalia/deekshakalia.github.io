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

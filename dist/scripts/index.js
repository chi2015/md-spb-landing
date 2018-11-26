document.addEventListener("DOMContentLoaded", ready);

var isMobile = false;

window.addEventListener("resize", resizeWindowEvent, false);

function ready() {
    editTextColors();
    resizeWindowEvent();
}

function editTextColors() {
    document.querySelector("#content6-c .mbr-text strong").style.color = '#232323';
    document.querySelector("#testimonials1-g .pb-3 strong").style.color = '#FFFFFF';
}

function checkSettingsIconSize() {
        document.querySelectorAll(".content6 .mbr-figure img").forEach(function(el) {
            el.style.width = isMobile? '20%' : '100%';
        });

        document.querySelectorAll("#features2-n .card-img img").forEach(function(el) {
            el.style.width = isMobile? '70%' : '100%';
        });
}

function resizeWindowEvent() {
    var newIsMobile = window.innerWidth < 992;
    if (newIsMobile!=isMobile) {
        isMobile = newIsMobile;
        checkSettingsIconSize();
    }
}
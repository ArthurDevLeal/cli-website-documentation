let logoIcon = document.querySelector(".sollievoImg");
// Events
logoIcon.addEventListener("mouseover", mouseOver);
logoIcon.addEventListener("mouseout", mouseOut);
// Functions
function mouseOver() {
    let logoIconPath = document.querySelector(".sollievoImg path");
    logoIconPath.setAttribute("fill", "#16dae0");
}
function mouseOut() {
    let logoIconPath = document.querySelector(".sollievoImg path");
    logoIconPath.setAttribute("fill", "#1c1c1c");
}

// Typeit
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#h1", {
        strings: ["<span>Sollievo</span> CLI"],
        speed: 120,
        breakLines: true,
        loop: true,
        startDelay: 500,
        deleteSpeed: 120,
        cursor: true,
        cursorSpeed: 1000,
        waitUntilVisible: true,
    })
        .pause(3000)
        .go();
});
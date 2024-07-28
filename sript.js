// Cursor Move 
let main = document.querySelector("body");
let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (ME) {
    gsap.to(cursor, {
        x: ME.x,
        y: ME.y
    })
})
// scroll Animation 
gsap.from(".Phone-Models", {
    scrollTrigger: {
        trigger: ".Phone-Models",
        scroller: "body",
        start: "top 80%"
    },
    y: 200,
    opcity: 0,
    duration: 0.5,
    stagger: 0.2
})
gsap.from(".Smartphones", {
    scrollTrigger: {
        trigger: ".Smartphones",
        scroller: "body",
        start: "top 75%"
    },
    y: 200,
    opcity: 0,
    duration: 1,
    stagger: 0.2
})

// menu-left-slider 
function onhoverShowMenu() {
    let MenuSlider = document.getElementById("menu-slide");
    MenuSlider.classList.add(".add-anim");
    MenuSlider.style.transform = "translate(0, 0)";
}
function menuclose() {
    document.getElementById("menu-slide").style.transform = "translate(-100%, 0)";
}

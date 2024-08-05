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
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
})
gsap.from(".Smartphones", {
    scrollTrigger: {
        trigger: ".Smartphones",
        scroller: "body",
        start: "top 75%",
    },
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})
gsap.from(".ani-l", {
    y: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,

})
var swiper = new Swiper(".mySwiper", {
    rewind: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// menu-left-slider 
let tl = gsap.timeline();
tl.to("#menu-slide", {
    left: 500,
    duration: 0.32,
    opacity: 1
})
tl.from("#menu-slide a", {
    opacity: 0,
    x: -300,
    duration: 0.3,
    stagger: 0.1

})
tl.from("#menu-slide i", {
    x: 10,
    opacity: 0,
    duration: 0.2
})
tl.pause();

let menu = document.querySelector(".menu");
let menuClose = document.querySelector("#menu-slide i");
menu.addEventListener("click", function () {
    tl.play();
})
menuClose.addEventListener("click", function () {
    tl.reverse();
})

let navIconeRouted=document.querySelector(".Header .left-side .nav .ul .list-items .list-link i");
let navLi = document.querySelectorAll(".Header .left-side .nav .ul .list-items .list-link");
let phoneList = document.querySelector(".phones-list");

navLi[0].addEventListener("mouseenter", function () {
    phoneList.style.display = "inline-flex";
    phoneList.style.transition="1s ease-in";
    navIconeRouted.style.transform="rotate(0deg)"
    navIconeRouted.style.transition=".5s";
})
phoneList.addEventListener("mouseleave", function () {
    phoneList.style.display = "none";
    phoneList.style.transition=".5s";


})

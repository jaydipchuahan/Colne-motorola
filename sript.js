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
    y: 150,
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

let navIconeRouted = document.querySelectorAll(".Header .left-side .nav .ul .list-items .list-link i");
let navLi = document.querySelectorAll(".Header .left-side .nav .ul .list-items .list-link");
let phoneList = document.querySelector(".phones-list");
let EarBudsList = document.querySelector(".Ear-Buds-list");
let TabList = document.querySelector(".Tab-list");
let SmartTV = document.querySelector(".Smart-Tv-list");
let Applineces = document.querySelector(".Smart-Applineces-list");



navLi[0].addEventListener("mouseenter", function () {
    phoneList.style.display = "inline-flex";
    phoneList.style.transition = "1s ease-in";
    navIconeRouted[0].style.transform = "rotate(0deg)"
    navIconeRouted[0].style.transition = ".5s";
    EarBudsList.style.display = "none";
    SmartTV.style.display = "none";
    TabList.style.display = "none";
    Applineces.style.display = "none";

})
phoneList.addEventListener("mouseleave", function () {
    phoneList.style.display = "none";
    phoneList.style.transition = ".5s";
    navIconeRouted[0].style.transform = "rotate(180deg)"
    navIconeRouted[1].style.transform = "rotate(180deg)"
    navIconeRouted[2].style.transform = "rotate(180deg)"
    navIconeRouted[4].style.transform = "rotate(180deg)"
    navIconeRouted[3].style.transform = "rotate(180deg)"
})
navLi[1].addEventListener("mouseenter", function () {
    EarBudsList.style.display = "inline-flex";
    EarBudsList.style.transition = "1s ease-in";
    navIconeRouted[1].style.transform = "rotate(0deg)"
    navIconeRouted[1].style.transition = ".5s";
    phoneList.style.display = "none";
    SmartTV.style.display = "none";
    TabList.style.display = "none";
    Applineces.style.display = "none";
})
EarBudsList.addEventListener("mouseleave", function () {
    EarBudsList.style.display = "none";
    EarBudsList.style.transition = ".5s";
    navIconeRouted[1].style.transform = "rotate(180deg)"
    navIconeRouted[2].style.transform = "rotate(180deg)"
    navIconeRouted[4].style.transform = "rotate(180deg)"
    navIconeRouted[3].style.transform = "rotate(180deg)" 
    navIconeRouted[0].style.transform = "rotate(180deg)"
})
navLi[2].addEventListener("mouseenter", function () {
    TabList.style.display = "inline-flex";
    TabList.style.transition = "1s ease-in";
    navIconeRouted[2].style.transform = "rotate(0deg)"
    navIconeRouted[2].style.transition = ".5s";
    phoneList.style.display = "none";
    EarBudsList.style.display = "none";
    SmartTV.style.display = "none";
    Applineces.style.display = "none";
})
TabList.addEventListener("mouseleave", function () {
    TabList.style.display = "none";
    TabList.style.transition = ".5s";
    navIconeRouted[4].style.transform = "rotate(180deg)"
    navIconeRouted[3].style.transform = "rotate(180deg)"
    navIconeRouted[2].style.transform = "rotate(180deg)"
    navIconeRouted[1].style.transform = "rotate(180deg)"
    navIconeRouted[0].style.transform = "rotate(180deg)"
})
navLi[3].addEventListener("mouseenter", function () {
    SmartTV.style.display = "inline-flex";
    SmartTV.style.transition = "1s ease-in";
    navIconeRouted[3].style.transform = "rotate(0deg)"
    navIconeRouted[3].style.transition = ".5s";
    phoneList.style.display = "none";
    EarBudsList.style.display = "none";
    TabList.style.display = "none";
    Applineces.style.display = "none";
})
SmartTV.addEventListener("mouseleave", function () {
    SmartTV.style.display = "none";
    SmartTV.style.transition = ".5s";
    navIconeRouted[4].style.transform = "rotate(180deg)"
    navIconeRouted[3].style.transform = "rotate(180deg)"
    navIconeRouted[2].style.transform = "rotate(180deg)"
    navIconeRouted[1].style.transform = "rotate(180deg)"
    navIconeRouted[0].style.transform = "rotate(180deg)"
})
navLi[4].addEventListener("mouseenter", function () {
    Applineces.style.display = "inline-flex";
    Applineces.style.transition = "1s ease-in";
    navIconeRouted[4].style.transform = "rotate(0deg)"
    navIconeRouted[4].style.transition = ".5s";
    phoneList.style.display = "none";
    EarBudsList.style.display = "none";
    TabList.style.display = "none";
    SmartTV.style.display = "none";

})
Applineces.addEventListener("mouseleave", function () {
    Applineces.style.display = "none";
    Applineces.style.transition = ".5s";
    navIconeRouted[4].style.transform = "rotate(180deg)"
    navIconeRouted[3].style.transform = "rotate(180deg)"
    navIconeRouted[2].style.transform = "rotate(180deg)"
    navIconeRouted[1].style.transform = "rotate(180deg)"
    navIconeRouted[0].style.transform = "rotate(180deg)"
})

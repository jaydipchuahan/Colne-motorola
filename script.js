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
        start: "top 80%",
        
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
    left: 425,
    duration: 0.32,
    opacity: 1
})
tl.from("#menu-slide ul li", {
    opacity: 0,
    x: -300,
    duration: 0.3,
    stagger: 0.1

})
tl.from("#menu-slide .close", {
    x: 10,
    opacity: 0,
    duration: 0.2
})
tl.pause();

let menu = document.querySelector(".menu");
let menuClose = document.querySelector("#menu-slide .close");
menu.addEventListener("click", function () {
    tl.play();
})
menuClose.addEventListener("click", function () {
    tl.reverse();
    sliderMenu.reverse(0.1);
    document.querySelector("#menu-slide .Smart-Applineces-Menu").style.display = "none";
    document.querySelector("#menu-slide .Smart-Tv-menu").style.display = "none";
    document.querySelector("#menu-slide .phone-list-menu").style.display = "none";
    document.querySelector("#menu-slide .Ear-Buds-menu").style.display = "none";
    document.querySelector("#menu-slide .Tab-list-menu ").style.display = "none";

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
let sliderMenuPhone = document.querySelectorAll("#menu-slide ul li ");

let sliderMenu = gsap.timeline();


// sliderMenu.from("#menu-slide .phone-list-menu a,#menu-slide .phone-list-menu h2",{
//     opacity:0,
//     duration:0.1,


// })
sliderMenu.pause();
sliderMenuPhone[0].addEventListener("click", function () {
    sliderMenu.play();
    document.querySelector("#menu-slide .phone-list-menu").style.display = "inline-flex";
    document.querySelector("#menu-slide .Ear-Buds-menu").style.display = "none";
    document.querySelector("#menu-slide .Smart-Applineces-Menu").style.display = "none";
    document.querySelector("#menu-slide .Tab-list-menu ").style.display = "none";
    sliderMenu.from("#menu-slide .phone-list-menu,#menu-slide .phone-list-menu a,#menu-slide .phone-list-menu h2", {
        left: 380,
        duration: 0.4,
        opacity: 0,
        stagger: 0.1
    })

})
sliderMenuPhone[1].addEventListener("click", function () {
    document.querySelector("#menu-slide .Ear-Buds-menu").style.display = "inline-flex";
    document.querySelector("#menu-slide .phone-list-menu").style.display = "none";
    document.querySelector("#menu-slide .Tab-list-menu ").style.display = "none";
    document.querySelector("#menu-slide .Smart-Applineces-Menu").style.display = "none";
    document.querySelector("#menu-slide .Smart-Tv-menu").style.display = "none";

    gsap.from("#menu-slide .Ear-Buds-menu,.Ear-Buds-menu img ", {
        left: 380,
        duration: 0.4,
        opacity: 0,
        stagger: 0.1
    })

})
sliderMenuPhone[2].addEventListener("click", function () {
    document.querySelector("#menu-slide .Tab-list-menu ").style.display = "flex"
    document.querySelector("#menu-slide .phone-list-menu").style.display = "none";
    document.querySelector("#menu-slide .Ear-Buds-menu").style.display = "none";
    document.querySelector("#menu-slide .Smart-Applineces-Menu").style.display = "none";
    document.querySelector("#menu-slide .Smart-Tv-menu").style.display = "none";

    gsap.from("#menu-slide .Tab-list-menu, #menu-slide .Tab-list-menu div", {
        left: 380,
        duration: 0.4,
        opacity: 0,
        stagger: 0.1
    })

})
sliderMenuPhone[3].addEventListener("click", function () {
    document.querySelector("#menu-slide .Smart-Tv-menu").style.display = "flex";
    document.querySelector("#menu-slide .phone-list-menu").style.display = "none";
    document.querySelector("#menu-slide .Ear-Buds-menu").style.display = "none";
    document.querySelector("#menu-slide .Tab-list-menu ").style.display = "none";
    document.querySelector("#menu-slide .Smart-Applineces-Menu").style.display = "none";

    gsap.from("#menu-slide .Smart-Tv-menu,#menu-slide .Smart-Tv-menu div", {
        left: 380,
        duration: 0.4,
        opacity: 0,
        stagger: 0.1
    })

})
sliderMenuPhone[4].addEventListener("click", function () {
    document.querySelector("#menu-slide .Smart-Applineces-Menu").style.display = "flex";
    document.querySelector("#menu-slide .Smart-Tv-menu").style.display = "none";
    document.querySelector("#menu-slide .phone-list-menu").style.display = "none";
    document.querySelector("#menu-slide .Ear-Buds-menu").style.display = "none";
    document.querySelector("#menu-slide .Tab-list-menu ").style.display = "none";
    gsap.from("#menu-slide .Smart-Applineces-Menu ,#menu-slide .Smart-Applineces-Menu div", {
        left: 380,
        duration: 0.4,
        opacity: 0,
        stagger: 0.1
    })

})
sliderMenuPhone[5].addEventListener("click", function () {
    document.querySelector("#menu-slide .Smart-Applineces-Menu").style.display = "none";
    document.querySelector("#menu-slide .Smart-Tv-menu").style.display = "none";
    document.querySelector("#menu-slide .phone-list-menu").style.display = "none";
    document.querySelector("#menu-slide .Ear-Buds-menu").style.display = "none";
    document.querySelector("#menu-slide .Tab-list-menu ").style.display = "none";
})
sliderMenuPhone[6].addEventListener("click", function () {
    document.querySelector("#menu-slide .Smart-Applineces-Menu").style.display = "none";
    document.querySelector("#menu-slide .Smart-Tv-menu").style.display = "none";
    document.querySelector("#menu-slide .phone-list-menu").style.display = "none";
    document.querySelector("#menu-slide .Ear-Buds-menu").style.display = "none";
    document.querySelector("#menu-slide .Tab-list-menu ").style.display = "none";
})
// product imagae chnage 
let ProductIMg = document.querySelector("#MainImgProduct");
let AllProductImg = document.querySelectorAll(".phone-small-images .small-img-box img");
function ChangeProductImg(data) {
    ProductIMg.src = data.src;
}
function BluePhoneColor() {
    ProductIMg.src = "https://motorolain.vtexassets.com/arquivos/ids/159044-1200-auto?width=1200&height=auto&aspect=true"
    AllProductImg[0].src = "https://motorolain.vtexassets.com/arquivos/ids/159044-1200-auto?width=1200&height=auto&aspect=true"
    AllProductImg[1].src = "https://motorolain.vtexassets.com/arquivos/ids/159045-1200-auto?width=1200&height=auto&aspect=true"
    AllProductImg[2].src = "https://motorolain.vtexassets.com/arquivos/ids/159046-1200-auto?width=1200&height=auto&aspect=true"
    AllProductImg[3].src = "https://motorolain.vtexassets.com/arquivos/ids/159047-1200-auto?width=1200&height=auto&aspect=true"
    AllProductImg[4].src = "https://motorolain.vtexassets.com/arquivos/ids/159048-1200-auto?width=1200&height=auto&aspect=true"
}
function PeachFuzzColor() {
    ProductIMg.src = "https://motorolain.vtexassets.com/arquivos/ids/159058-800-auto?width=800&height=auto&aspect=true"
    AllProductImg[0].src = "https://motorolain.vtexassets.com/arquivos/ids/159058-800-auto?width=800&height=auto&aspect=true"
    AllProductImg[1].src = "https://motorolain.vtexassets.com/arquivos/ids/159059-800-auto?width=800&height=auto&aspect=true"
    AllProductImg[2].src = "https://motorolain.vtexassets.com/arquivos/ids/159059-800-auto?width=800&height=auto&aspect=true"
    AllProductImg[3].src = "https://motorolain.vtexassets.com/arquivos/ids/159061-800-auto?width=800&height=auto&aspect=true"
    AllProductImg[4].src = "https://motorolain.vtexassets.com/arquivos/ids/159062-800-auto?width=800&height=auto&aspect=true"
}
function GreenPhoneColor() {
    ProductIMg.src = "https://motorolain.vtexassets.com/arquivos/ids/159051-1200-auto?width=1200&height=auto&aspect=true"
    AllProductImg[0].src = "https://motorolain.vtexassets.com/arquivos/ids/159051-1200-auto?width=1200&height=auto&aspect=true"
    AllProductImg[1].src = "https://motorolain.vtexassets.com/arquivos/ids/159052-1200-auto?width=1200&height=auto&aspect=true"
    AllProductImg[2].src = "https://motorolain.vtexassets.com/arquivos/ids/159053-1200-auto?width=1200&height=auto&aspect=true"
    AllProductImg[3].src = "https://motorolain.vtexassets.com/arquivos/ids/159054-1200-auto?width=1200&height=auto&aspect=true"
    AllProductImg[4].src = "https://motorolain.vtexassets.com/arquivos/ids/159055-1200-auto?width=1200&height=auto&aspect=true"
}
const leftButton = document.getElementsByClassName('leftButton')[0];
const rightButton = document.getElementsByClassName('rightButton')[0];
const images = document.querySelectorAll('.highlight-box');
let currentOffset = 0;

function left() {
    if (currentOffset <= -100) {
        currentOffset += 100;
    }
    if (currentOffset <= 0) {
        images.forEach(image => {
            image.style.transform = `translateX(${currentOffset}%)`;
            image.style.transition = '.5s';
        });
        console.log(currentOffset);
    }
}
function right() {
    if (currentOffset >= -400) {
        currentOffset -= 100;
    }
    if (currentOffset >= -400)
        images.forEach(image => {
            image.style.transform = `translateX(${currentOffset}%)`;
            image.style.transition = '.5s';
        });
    console.log(currentOffset);

}
// Add event listeners to buttons
leftButton.addEventListener('click', left);
rightButton.addEventListener('click', right);

// product 

gsap.to(".phone-image-box", {
    y: 600,
    duration: 5,
    scrollTrigger: {
        trigger: ".phone-image-box",
        scroller:"body",
        markers:true,
        start: 55,
        end: 600,
        scrub: 1.5
    }
})

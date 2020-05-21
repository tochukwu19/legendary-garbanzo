const panelList1 = document.querySelector(".panel-list1")
const panelList2 = document.querySelector(".panel-list2")
const panelList3 = document.querySelector(".panel-list3")
const aboutC1 = document.querySelector(".content-container1")
const aboutC2 = document.querySelector(".content-container2")
const aboutC3 = document.querySelector(".content-container3")

panelList1.addEventListener("click", panelList1Fn)

function panelList1Fn() {
    aboutC1.classList.add("yes-display");
    aboutC1.classList.remove("no-display");
    aboutC3.classList.add("no-display");
    aboutC2.classList.add("no-display");
    panelList1.classList.add("active1");
    panelList2.classList.remove("active1");
    panelList3.classList.remove("active1")
}

panelList2.addEventListener("click", panelList2Fn)

function panelList2Fn() {
    aboutC1.classList.add("no-display");
    aboutC3.classList.add("no-display");
    aboutC2.classList.add("yes-display");
    aboutC2.classList.remove("no-display");
    panelList1.classList.remove("active1");
    panelList2.classList.add("active1");
    panelList3.classList.remove("active1")
}

const preloader = document.querySelector('.preloader');

const fadeout = e => {
    preloader.classList.add("fadeout")
}
// const fadeEffect = setInterval(() => {
//     // if we don't set opacity 1 in CSS, then
//     // it will be equaled to "" -- that's why
//     // we check it, and if so, set opacity to 1
//     if (!preloader.style.opacity) {
//         preloader.style.opacity = 1;
//     }
//     if (preloader.style.opacity > 0) {
//         preloader.style.opacity -= 0.1;
//     } else {
//         clearInterval(fadeEffect);
//     }
// }, 600);


// window.addEventListener('load', fadeout);

panelList3.addEventListener("click", panelList3Fn)

function panelList3Fn() {
    aboutC1.classList.add("no-display");
    aboutC3.classList.add("yes-display");
    aboutC3.classList.remove("no-display");
    aboutC2.classList.add("no-display");
    panelList1.classList.remove("active1");
    panelList2.classList.remove("active1");
    panelList3.classList.add("active1");
}


const playbtn = document.querySelector(".playbtn");
const vid1 = document.querySelector(".workvid1");
const playbtn2 = document.querySelector(".playbtn1");
const vid2 = document.querySelector(".workvid2");
const playbtn3 = document.querySelector(".playbtn2");
const vid3 = document.querySelector(".workvid3");

const play = e => {
    vid1.play()
    playbtn.classList.add("fadeplay")
    console.log("play")
}

playbtn.addEventListener("click", play)

const pause = e => {
    vid1.pause()
    playbtn.classList.remove("fadeplay")
    console.log("pause")
}

vid1.addEventListener("click", pause)

// 2nd video
const play2 = e => {
    vid2.play()
    playbtn2.classList.add("fadeplay")
    console.log("play")
}

playbtn2.addEventListener("click", play2)

const pause2 = e => {
    vid2.pause()
    playbtn2.classList.remove("fadeplay")
    console.log("pause")
}

vid2.addEventListener("click", pause2)


const play3 = e => {
    vid3.play()
    playbtn3.classList.add("fadeplay")
    console.log("play")
}

playbtn3.addEventListener("click", play3)

const pause3 = e => {
    vid3.pause()
    playbtn3.classList.remove("fadeplay")
    console.log("pause")
}

vid3.addEventListener("click", pause3)



// Hamburger JS
const ham = document.querySelector(".hamburger");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const ham3 = document.querySelector(".ham3");
const navbar = document.querySelector(".Mmenu");
const body = document.querySelector("html")

const menuOpen = e => {
    ham1.classList.toggle("ham-tilt-right");
    ham2.classList.toggle("ham-no-show");
    ham3.classList.toggle("ham-tilt-left");
    navbar.classList.toggle("nav-out");
    navbar.classList.toggle("MMmenu")
    body.classList.toggle("no-scroll")
}

ham.addEventListener("click", menuOpen)


// Hamburger canceel out when clicked on
const buttons = document.querySelectorAll(".underline-magic")

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log("forEach worked");
        ham1.classList.remove("ham-tilt-right");
        ham2.classList.remove("ham-no-show");
        ham3.classList.remove("ham-tilt-left");
        navbar.classList.remove("nav-out");
        body.classList.remove("no-scroll");
        navbar.classList.remove("MMmenu");
    });
});
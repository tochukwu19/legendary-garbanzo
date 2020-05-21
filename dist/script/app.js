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
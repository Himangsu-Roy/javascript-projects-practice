const links = document.querySelectorAll(".nav-list li a");

for (let link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
   
}

// Sticky Header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle(
      "sticky",
    window.scrollY > 0);
});


// active nav link indicator
const navLinks = document.querySelectorAll(".link");
console.log(navLinks)
navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      console.log(e.target)
    // Remove active class from all links
        navLinks.forEach((link) => {
        console.log(link)
      link.classList.remove("active");
    });
    // Add active class to the clicked link
        this.classList.add("active");
        // closeMenu();
        
  });
});

// Scroll to top

const backToTop = document.querySelector(".top");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 560) {
    backToTop.classList.add("show-btn");
  } else {
    backToTop.classList.remove("show-btn");
  }
});

backToTop.addEventListener("click", function (e) { 
    // e.preventDefault();
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    // backToTop.classList.remove("show-btn");

})



// Responsive navigation bar

const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

// hamburger.addEventListener("click", function (e) {
//   e.preventDefault();
//   navMenu.classList.toggle("show-menu");
// });

// function showMenu() {
//     // menu.classList.toggle("show-menu");
//     hamburger.style.display = "none";
//     close.style.transform = "translateY(0)";
//     menu.style.transform = "translateY(0)";
//     close.style.display = "block";
//     // close.style.display = "block";
// }

// function closeMenu() { 
//     // menu.classList.toggle("show-menu");
//     hamburger.style.display = "block";
//     close.style.transform = "translateY(-20rem)";
//     menu.style.transform = "translateY(-200%)";
//     // close.style.display = "none";
// }


// hamburger.addEventListener("click", showMenu);
// close.addEventListener("click", closeMenu);


// another style open close menu    
const menuWrapper = document.querySelector(".nav-wrapper");

const showMenu = () => {
    hamburger.style.display = "none";
    close.style.transform = "translateY(0)";
    menuWrapper.style.transform = "translateX(0)";
    menu.style.transform = "translateX(0)";
}

const closeMenu = () => {
    close.style.transform = "translateY(-20rem)";
    hamburger.style.display = "block";
    // close.style.transform = "translateY(0)";
    menuWrapper.style.transform = "translateX(-200%)";
    menu.style.transform = "translateX(300%)";
    subMenuThree.style.transform = "translateX(-100%)";

}


hamburger.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);
menuWrapper.addEventListener("click", closeMenu);

// submenu section
const thirdLink = document.querySelector(".third-link");
const back = document.querySelector(".back-to-menu");
const subMenuThree = document.querySelector(".submenu-three");

thirdLink.addEventListener("click", (e) => { 
    menu.style.transform = "translateX(-100%)";
    subMenuThree.style.transform = "translateX(0)";
})
back.addEventListener("click", (e) => { 
    menu.style.transform = "translateX(0)";
    subMenuThree.style.transform = "translateX(-100%)";
})


// Scroll Indicator 
window.onscroll = () => scrollProgress();
function scrollProgress() {
  // const scrollPos = window.scrollY;
  // const progress = document.querySelector(".progress-bar");
  // progress.style.width = `${scrollPos * 100}%`;
  // if (scrollPos > 100) {
  //     progress.classList.add("active");
  // } else {
  //     progress.classList.remove("active");
  // }

  const currentState =
    document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (currentState / pageHeight) * 100;
  // document.querySelector(".progress").style.width = `${scrollPercentage}%`;

  const progressBar = document.querySelector(".progress");
  progressBar.style.visibility = "visible";
  progressBar.style.width = `${scrollPercentage}%`;

  // Newsletter from scroll
    if (scrollPercentage >= 100) {
        document.querySelector(".newsletter").style.transform = "translateX(0)";
    } else {
        document.querySelector(".newsletter").style.transform = "translateX(-100%)";
    }


    const newsletter = document.querySelector(".newsletter");
    document
      .querySelector(".newsletter .fa-times")
      .addEventListener("click", () => {
        newsletter.style.transform = "translateX(-100%)";
        console.log("close");
    });
}

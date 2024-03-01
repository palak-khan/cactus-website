function navBar() {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const navLink = document.querySelectorAll(".nav--link");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
  const linkAction = () => {
    navMenu.classList.remove("show-menu");
  };
  navLink.forEach((n) => n.addEventListener("click", linkAction));
}
navBar();

function headerBlur() {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
}
window.addEventListener('scroll',headerBlur)
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section");

function scrollActive() {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      current.classList.add("active-link");
    } else {
      current.classList.remove("active-link");
    }
  });
}
const sr = ScrollReveal({
  origin:'top',
  distance:'80px',
  duration:2500,
  delay:300,
  // reset:true,
})
sr.reveal(`.home--img,.new--data,.care--img,.contact--content,.footer`)
sr.reveal(`.home--data,.care--list,.contact--img`,{
  delay:500
})
sr.reveal(`.new--card`,{
  delay:500,
  interval:100,
})
sr.reveal(`.shop--card`,{
  delay:500,
  interval:100,
})
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // sections.forEach(sec => {
    //     let top = window.scrollY;
    //     let offset = sec.offsetTop - 100;
    //     let height = sec.offsetHeight;
    //     let id = sec.getAttribute('id');

    //     if(top >= offset && top < offset + height) {
    //         // active navbar links
    //         navLinks.forEach(links => {
    //             links.classList.remove('active');
    //             document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    //         });
    //         // active sections for animation on scroll
    //         sec.classList.add('show-animate');
    //     }
    //     // if want to animation that repeats on scroll use this
    //     else {
    //         sec.classList.remove('show-animate');
    //     }
    // });
    sections.forEach(sec => {

    let rect = sec.getBoundingClientRect();
    let id = sec.getAttribute('id');

    // Section is considered active when its top reaches 60% of screen
    if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= 100) {

        // active navbar links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        document.querySelector('header nav a[href*=' + id + ']')
            .classList.add('active');

        sec.classList.add('show-animate');

    }
});


    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // // animation footer on scroll
    // let footer = document.querySelector('footer');

    // footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    // Animate footer on scroll
window.addEventListener('scroll', () => {
  let footer = document.querySelector('footer');

  // Check if user has scrolled to the bottom
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
    footer.classList.add('show-animate');
  } else {
    footer.classList.remove('show-animate');
  }
});

}
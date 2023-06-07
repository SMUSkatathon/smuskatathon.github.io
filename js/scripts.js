/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          offset: 74,
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});

window.addEventListener('scroll', function() {
  // console.log(window.scrollY);

  if (window.scrollY > 175) {
    document.querySelector('.buttons-container').style.display = 'block';
  } else {
    document.querySelector('.buttons-container').style.display = 'none';
  }
});

function resizeImages() {
  var aspectRatio = window.innerWidth / window.innerHeight;

  // Check the aspect ratio and update the image source accordingly
  if (aspectRatio < 0.68) {
    document.getElementById("banner").src = "assets/img/hero_mobile.webp";
    document.getElementById("img-categories").src = "assets/img/categories_mobile.webp";
  } else {
    document.getElementById("banner").src = "assets/img/hero.webp";
    document.getElementById("img-categories").src = "assets/img/categories.webp";
  }
}

function setRegisterText() {
  const earlyBirdDate = new Date("30 Jun, 2023 21:00:00 GMT+0800").getTime();
  const normalDate = new Date("23 Jul, 2023 00:00:00 GMT+0800").getTime();
  const closeDate = new Date("1 Aug, 2023 00:00:00 GMT+0800").getTime();
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Singapore" })).getTime();

  if (now < earlyBirdDate) {
    document.getElementById("txt-register").innerHTML = "Registration opens tonight at 9pm.";
  } else if (now < normalDate) {
    document.getElementById("txt-register").innerHTML = "Early bird registration ends on 22 July 2023!";
  } else if (now < closeDate) {
    document.getElementById("txt-register").innerHTML = "Registration closes on 31 July 2023!";
  } else {
    document.getElementById("txt-register").innerHTML = "Registration is now closed. See ya there!";
  }
}

// Attach the resize event listener
window.addEventListener('resize', resizeImages);

// Call functions initially to set the initial layout
resizeImages();
setRegisterText();

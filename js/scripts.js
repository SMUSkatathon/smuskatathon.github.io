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

// Attach the resize event listener
window.addEventListener('resize', resizeImages);

// Call functions initially to set the initial layout
resizeImages();

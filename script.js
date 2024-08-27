const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView : 1
        },
        1030:{
            slidesPerView : 2
        }
    }
  
  });

//   ----------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const slideInTexts = document.querySelectorAll('.slide-in-text');

    function checkSlide() {
        const revealPoint = window.innerHeight / 1.5;

        slideInTexts.forEach(text => {
            const textPosition = text.getBoundingClientRect().top;

            if (textPosition < revealPoint && textPosition > -text.offsetHeight) {
                text.classList.add('visible');
            } else {
                text.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide(); // Initial check to handle elements already in view on page load
});


// ------------------------------gallery wrapper--------------------------------

























document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.fade-in');
  
  function checkVisibility() {
      const viewportHeight = window.innerHeight;
      
      elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const isVisible = elementTop < viewportHeight * 0.8;
          
          if (isVisible) {
              element.classList.add('visible');
          }
      });
  }
  
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility(); // Initial check
});
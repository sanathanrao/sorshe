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



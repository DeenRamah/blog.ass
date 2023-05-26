// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute("href"));
        
        if (target) {
          const offsetTop = target.offsetTop;
          
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });
  
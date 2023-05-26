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
  
  // Show/hide sections based on navigation
  window.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        
        const targetSection = document.querySelector(this.getAttribute("href"));
        
        sections.forEach(function(section) {
          section.style.display = "none";
        });
        
        if (targetSection) {
          targetSection.style.display = "block";
        }
      });
    });
  });
  
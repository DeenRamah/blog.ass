// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handling
  const form = document.querySelector('#volunteer-form form');
  form.addEventListener('submit', e => {
    e.preventDefault();
  
    // Get form values
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const qualification = form.querySelector('#qualification').value;
  
    // Validate form
    if (name && email && qualification) {
      // Perform form submission (you can customize this part based on your needs)
      alert('Thank you for applying as a volunteer teacher!');
      form.reset();
    } else {
      alert('Please fill out all the fields.');
    }
  });
  
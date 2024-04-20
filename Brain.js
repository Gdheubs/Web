// Add functionalities like:
// - Smooth scrolling on navigation clicks
// - Lightbox effect for blog post images
// - Animations for elements

// Example: Smooth scrolling on navigation clicks (using vanilla JS)
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    

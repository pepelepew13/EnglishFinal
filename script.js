document.addEventListener("DOMContentLoaded", function() {
  // Código para el tabbar
  const tabLinks = document.querySelectorAll('.tabbar a');
  tabLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const sections = document.querySelectorAll('.category');
      const presentation = document.querySelector('.presentation');
      
      sections.forEach(section => section.style.display = 'none');
      targetSection.style.display = 'block';
      presentation.style.display = 'none'; // Oculta la sección de presentación al mostrar una categoría
    });
  });

  // Código para el enlace del título
  const homeLink = document.querySelector('.home-link');
  homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    const presentation = document.getElementById('presentation');
    const sections = document.querySelectorAll('.category');
    
    sections.forEach(section => section.style.display = 'none');
    presentation.style.display = 'block';
    presentation.scrollIntoView({ behavior: 'smooth' });
  });
});
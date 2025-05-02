window.addEventListener('DOMContentLoaded', () => {
  // Verificamos si ya se mostró la alerta en esta sesión
  if (!sessionStorage.getItem('bienvenidaMostrada')) {
    Swal.fire({
      title: '¡Bienvenido a ComunidadEESS!',
      text: 'Nos alegra que estés aquí.',
      imageUrl: 'IMG/logotipo_comunidades.jpg',
      imageWidth: 160,
      imageHeight: 60,
      imageAlt: 'Logo ComunidadEESS',
      confirmButtonText: 'Cerrar'
    });

    // Guardamos que ya se mostró la alerta
    sessionStorage.setItem('bienvenidaMostrada', 'true');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
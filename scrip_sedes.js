document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el ancho de la pantalla es menor o igual a 768px (puedes ajustar este valor)
    if (window.innerWidth <= 768) {
      const mapIframe = document.getElementById('mapIframe');
      const locationDivs = document.querySelectorAll('.botones');
  
      // Iterar sobre cada div y agregar un evento click
      locationDivs.forEach(div => {
        div.addEventListener('click', function() {
          // Remover los estilos resaltados de todos los divs
          locationDivs.forEach(div => {
            div.style.backgroundColor = 'white'; // Restaurar el color de fondo predeterminado
            div.style.color = 'black'; // Restaurar el color del texto predeterminado
          });
  
          // Resaltar el div actual
          this.style.backgroundColor = 'brown'; // Cambiar el color de fondo del div seleccionado
          this.style.color = 'white'; // Cambiar el color del texto para que sea visible
  
          // Obtener la URL del mapa desde el atributo data-src del div
          const mapUrl = this.getAttribute('data-src');
  
          // Cambiar la URL del iframe al hacer clic en el div
          mapIframe.src = mapUrl;
  
          // Cambiar el estilo de la clase .mapa a display: flex
          const mapa = document.querySelector('.mapa');
          if (mapa) {
            mapa.style.display = 'flex';
          }
        });
      });
    }
  });

  
  

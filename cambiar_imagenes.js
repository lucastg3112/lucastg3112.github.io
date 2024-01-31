document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia a los divs y a la imagen
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const div3 = document.getElementById('div3');
    const div4 = document.getElementById('div4');
    const imagen = document.getElementById('imagen');

    // Función para cambiar la imagen según el div clicado
    function cambiarImagen(idDiv) {
        switch (idDiv) {
            case 'div1':
                imagen.src = 'https://cdn.discordapp.com/attachments/917925174077169665/1176200989552943214/medellin.png?ex=656e0188&is=655b8c88&hm=963ea55c690d61fad406108f577e5684da3156c700423c22d672d7b0556a5b54&';
                break;
            case 'div2':
                imagen.src = 'nueva_imagen2.jpg';
                break;
            case 'div3':
                imagen.src = 'nueva_imagen3.jpg';
                break;
            case 'div4':
                imagen.src = 'https://cdn.discordapp.com/attachments/917925174077169665/1176200989552943214/medellin.png?ex=656e0188&is=655b8c88&hm=963ea55c690d61fad406108f577e5684da3156c700423c22d672d7b0556a5b54&';
                break;
            default:
                // Código para caso por defecto si no coincide con ningún div
                break;
        }
    }

    // Agregar eventos de clic a los divs
    div1.addEventListener('click', function() {
        cambiarImagen('div1');
    });

    div2.addEventListener('click', function() {
        cambiarImagen('div2');
    });

    div3.addEventListener('click', function() {
        cambiarImagen('div3');
    });

    div4.addEventListener('click', function() {
        cambiarImagen('div4');
    });
});

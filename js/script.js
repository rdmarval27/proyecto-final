document.addEventListener('DOMContentLoaded', function() {
    var imagenesServicioTecnico = document.querySelectorAll('.grid__container--serviciotecnico img');


    imagenesServicioTecnico.forEach(function(imagen) {
        imagen.addEventListener('mouseover', function() {
            imagen.style.transform = 'scale(1.2)'; 
            imagen.style.transition = 'transform 0.3s ease'; 
        });

       
        imagen.addEventListener('mouseout', function() {
            
            imagen.style.transform = '';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
   
    var tituloServicioTecnico = document.querySelector('.main-content--serviciotecnico h1');

  
    tituloServicioTecnico.addEventListener('mouseover', function() {
       
        tituloServicioTecnico.style.fontSize = '2em'; 
        tituloServicioTecnico.style.color = 'blue'; 
    });

    tituloServicioTecnico.addEventListener('mouseout', function() {
        tituloServicioTecnico.style.fontSize = '';
        tituloServicioTecnico.style.color = '';
    });
});


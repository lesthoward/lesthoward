$(document).ready(function () { 

    // MENÚ DE NAVEGACIÓN
    if ($(window).width() > 800) {
        $('nav a').each(function (index) { 
            $(this).css({
                top: '-100px'
            })
            
            $(this).animate({
                top: '0px'
            },1300 + (index * 200))
    
        })
    }
    
    // TEXTO DE HEADER
    if ($(window).width() > 800) {
        $('header .texto').css({
			opacity: 0,
			marginTop: 50
		});

		$('header .texto').animate({
			opacity: 1,
			marginTop: '0'
		},1500);
    }

    // ENLACES QUE DIRIGEN
    var scrollPlatillos = $('#secplatillos').offset().top,
        scrollAcercade = $('#secacercaDe').offset().top,
        scrollGaleria = $('#secgaleria').offset().top,
        scrollUbicacion = $('#secubicacion').offset().top;

   
    
    $('#acercaDe').on('click', function (e) { 
        e.preventDefault()
        $('html').animate({
			scrollTop: scrollAcercade - 115
		});
    })

    $('#platillos').on('click', function (e) { 
        e.preventDefault()
        $('html').animate({
			scrollTop: scrollPlatillos - 40
		});
    })
    
    $('#galeria').on('click', function (e) { 
        e.preventDefault()
        $('html').animate({
			scrollTop: scrollGaleria
		});
    })
    
    $('#ubicacion').on('click', function (e) { 
        e.preventDefault()
        $('html').animate({
            scrollTop: scrollUbicacion
        })
    })

    $(window).resize(function(){
		var windowWidth = $(window).width();
		
			
		
	});


 })
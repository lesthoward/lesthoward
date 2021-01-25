$(document).ready(function () {

    $(window).scroll(function () {

        var anchoVentana = $(window).width();
        if (anchoVentana > 800) {
            var medidaScroll = $(window).scrollTop();
        $('header .texto').css({
            'transform': 'translate(0px, ' +  medidaScroll / 2 + '%)'
        });
        // alert();

        $('#secacercaDe article').css({
            'transform': 'translate(0px, -' +  medidaScroll / 9 + '%)'
        });
        }

    });

    $(window).resize(function(){
		var windowWidth = $(window).width();
		if (windowWidth < 800){
			$('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'
            });

		}
	});

});
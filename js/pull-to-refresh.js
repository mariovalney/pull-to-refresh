$(document).ready(function(){
    var htmlheight = $(this).height();

    $(".touch").prepend('<div id="push-to-refresh"><span class="porcento"></span></div>');

	function soltar() {
		$('#push-to-refresh .porcento').text('Refreshing...');
		if ($('#push-to-refresh').height() > 0 ) {
			location.reload();

		//	if ($('#push-to-refresh').height() < (htmlheight/3.5) ) {
		//		$('#push-to-refresh').css('height',0);
		//	} else {
		//		location.reload();
		//	}
		
		}
	}

    $(this).on('vmousedown',function(event) {
    	event.preventDefault();
		var yInicial = event.pageY;

		$(this).on('vmousemove',function(event) {
			event.preventDefault();
			var yFinal = event.pageY;
			var largura = (yFinal - yInicial);
			
			// var largura = $('#push-to-refresh').height();
			// largura = largura + 1;
			
			if (largura  < (htmlheight/3)) {
				$('#push-to-refresh').css('height',largura);
				$('#push-to-refresh .porcento').text('Puxando');
				
				var porcento = ((largura*100)/(htmlheight/3));
				if (porcento < 50) {
					$('#push-to-refresh .porcento').removeClass('setapracima').addClass('setaprabaixo');
				} else { 
					$('#push-to-refresh .porcento').removeClass('setaprabaixo').addClass('setapracima');
				}
			}
		});		
	});

	$(this).on('vmouseup',function(event){
		event.preventDefault();
		$(this).off('vmousemove');
		soltar();
	});

});





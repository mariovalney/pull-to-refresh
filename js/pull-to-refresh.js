$JQuery(document).ready(function(){

    $JQuery(".touch").prepend('<div id="push-to-refresh"></div>');

    $('#touch').swipeDown(function(){
	    var distanciaDoTopo = $JQuery(".touch").css("padding-top");
	    $JQuery("#push-to-refresh").height( distanciaDoTopo );
	    distanciaDoTopo = (distanciaDoTopo + 1);
	    $JQuery("#push-to-refresh").css("padding-top",distanciaDoTopo);

	});

});





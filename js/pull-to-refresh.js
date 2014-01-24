$(document).ready(function(){

    $('<div id="push-to-refresh"></div>').prependTo( ".touch" );

    $(document).hover( function () {
        alert('dsds');
        var distanciaDoTopo = $(".touch").css({padding-top});
        $("#push-to-refresh").height( distanciaDoTopo );
    });
});
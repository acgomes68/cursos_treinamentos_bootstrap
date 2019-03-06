$(document).ready(function(){
	$('body').scrollspy({
		target: '#menu',
		offset: 50
	});
	$("#menu").on('activate.bs.scrollspy', function () {
		$("section span").css("opacity",0);

		var id = $("#menu li.active a").attr("href");
		var elemento = $(id).find("span");

		elemento.css("opacity",1);
	});
});
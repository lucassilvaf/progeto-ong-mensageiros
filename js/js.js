$(document).ready(function() {
	$('a[href="#sobre"]').click(function() {
		$('html, body').animate({
			scrollTop:$('#sobre').offset().top
		}, 500);
		return false;
	});

	$('a[href="#negocios-sociais"]').click(function() {
		$('html, body').animate({
			scrollTop:$('#negocios-sociais').offset().top
		}, 500);
		return false;
	});
	$('a[href="#resultados"]').click(function() {
		$('html, body').animate({
			scrollTop:$('#resultados').offset().top
		}, 500);
		return false;
	});
	$('a[href="#parceiros"]').click(function() {
		$('html, body').animate({
			scrollTop:$('#parceiros').offset().top
		}, 500);
		return false;
	});
	$('a[href="#contato"]').click(function() {
		$('html, body').animate({
			scrollTop:$('#contato').offset().top
		}, 500);
		return false;
	});
	$('a[href=".header"]').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
})
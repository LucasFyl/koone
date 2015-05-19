$( document ).ready(function(){
	$('body').css('background-color', 'red');

	setTimeout(function(){
		TweenMax.to('body', 5, {backgroundColor:'blue',ease:Power2.easeOut});
	}, 1000);
});


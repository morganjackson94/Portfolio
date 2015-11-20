(function() {
    
    $.fatNav();
    $.stellar();	

	function blink(selector){
		$(selector).fadeOut(1000, function(){
		    $(this).fadeIn(1000, function(){
		        blink(this);
		    });
		});
		}
		    
	blink('.scroll');

	setTimeout(fade_out, 10000);

	function fade_out() {
  		$(".scroll").fadeOut('slow').empty();
		}
    

}());


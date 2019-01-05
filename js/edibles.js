$( document ).ready(function() {
   
    $(".thcGummies").click(function() 
	{
		console.log("check");
		$(".gummyDesc").toggle();
		$(".thcOtherProducts").toggle();
		$(this).toggleClass("width50");

	});

	   $(".thcOtherProducts").click(function() 
	{
		$(".otherProductsDesc").toggle();
		$(".thcGummies").toggle();
		$(this).toggleClass("width50");

	});
});
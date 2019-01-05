	
$( document ).ready(function() {


    var box = $(".strainSelectionCon"), x;
	$(".arrow").click(function() {
	  if ($(this).hasClass("right")) {
	  	console.log(box.width());
	  	console.log(box.scrollLeft());
	    x = ((box.width())) + box.scrollLeft();
	    box.animate({
	      scrollLeft: x,
	    })
	  } else {
	    x = ((box.width())) - box.scrollLeft();
	    box.animate({
	      scrollLeft: -x,
	    })
	  }
	})

	$( ".strainChoice" ).hover(function() 
	{

		$(this).children('.text-Overlay').toggle();
	});



	$('.strainChoice').click(function()
	{
		$('.toggleAccSize .mainMenuContent .strainDisplay').hide();
		if ($(this).hasClass("change-strain-1")) 
		{
			$(this).parent(".flex").parent(".strainSelectionCon").parent().siblings('.strain-1').show();
		}
		else if ($(this).hasClass("change-strain-2")) 
		{
			$(this).parent(".flex").parent(".strainSelectionCon").parent().siblings('.strain-2').show();
		}
		else
		{
			$(this).parent(".flex").parent(".strainSelectionCon").parent().siblings('.strain-3').show();
		}

	}); 

	$(".accordionHead").click(function() 
	{
		
		// turn styles into a toggle class
		if ( $(this).parent('.accordionMain').hasClass("toggleAccSize")) 
		{ 
			//if clicks already open reset all0
			$('.accordionMain').removeClass('toggleAccSize');
			$('.accIcon .plus').show();
			$('.accIcon .minus').hide();
			$('.mainMenuContent').slideUp(1000,"swing");
		}
		else
		{
			//reset accordion
			$('.accordionMain').removeClass('toggleAccSize');
			$('.accIcon .plus').show();
			$('.accIcon .minus').hide();
			$('.mainMenuContent').slideUp(1000,"swing");

			//toggle size and plus/minus
			//.slideToggle(500,"swing") after applying contents
      		$(this).parent('.accordionMain').toggleClass('toggleAccSize');
      		$(this).children('.accIcon').children('.plus').toggle();
      		$(this).children('.accIcon').children('.minus').toggle();
			$(this).siblings('.mainMenuContent').slideToggle(1000,"swing") ;


		}





      // $(this).siblings('.subMenu').slideToggle(500,"swing");
	});
});
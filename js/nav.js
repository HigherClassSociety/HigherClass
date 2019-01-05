var i = 0;


$( document ).ready(function() {
    $(".nav_hamburger").click(function()
    {
    	i++;
    	
    	$('.navigation').slideToggle(1000,"swing");




        if ($(window).width() > 1400) {
           $('.navigation').css('display', 'flex');
        }
    	// if(i % 2 == 1)
    	// {
    	// 	$('#main').css('margin-top', '5%');
    	// }
    	// else
    	// {
    	// 	$('#main').css('margin-top', '15%');
    	// }
    	$('.navBtn img').removeClass('rotateArrow');
    	$('.subMenu').hide();
   
	});

	$(".expandTrig").click(function() 
	{
      $(this).children('img').toggleClass('rotateArrow');
      $(this).siblings('.subMenu').slideToggle(500,"swing");
	});



});
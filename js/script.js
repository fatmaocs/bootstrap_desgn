

$(document).ready(function () 
{

// show option box

 $(".gear-check").click(function () {
        
        $(".color_option").fadeToggle();
        
 });


 //change color from option box

var option = $('.option_box ul li');

option.eq(0).css("backgroundColor","#E41B17").end();
option.eq(1).css("backgroundColor","#E426D5").end();
option.eq(2).css("backgroundColor","#009AFF").end();
option.eq(3).css("backgroundColor","#FFD500").end();


option.click(function()
{
    $("link[href*='theme']").attr("href",$(this).attr('data-value'));
});

});


///////////make loader///////////


$(window).on('load', function() { 

	$('.spinner').fadeOut(3000,function()
	{
      $(this).parent().fadeOut(3000, function () 
        {
            
            $(this).remove();
              $("body").css("overflow", "auto");
        });
	})
});

////////// end loader ///////////


$(window).scroll(function()
{
	// console.log($(this).scrollTop());

	top_button=$('.scroll_top');

	if($(this).scrollTop()>=200 ? top_button.show() : top_button.hide());

	top_button.click(function()
	{
        $("html,body").animate({scrollTop:0},600)
	});
});




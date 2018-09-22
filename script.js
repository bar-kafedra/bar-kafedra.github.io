$("#menu-button-notactive").click(function () {
	     if (!($("#menu-gamburger").is(":animated")))
	     {
	     $("#menu-button-notactive").hide();
         $("#menu-button-active").show();
         $("#menu-gamburger").slideDown("slow");
      	 }
});
$("#menu-button-active").click(function () {
	     if (!($("#menu-gamburger").is(":animated")))
	     {
	     $("#menu-button-active").hide();
         $("#menu-button-notactive").show();
         $("#menu-gamburger").slideUp("slow");
         }
});

$("#menushawrma").show("slow");
$("#menupancakes").hide(1);


$("#shawrma").click(function () {
  if (!($("#menupancakes").is(":animated")))
  {
  	if ($("#menushawrma").is(":hidden"))
  {
  	$("#menushawrma").slideDown("slow");
  }
  if (!($("#menupancakes").is(":hidden")))
  		{
  			$("#menupancakes").slideUp("slow");
  		}
  }
});
$("#pancakes").click(function () {
  if (!($("#menushawrma").is(":animated")))
  {
  	if ($("#menupancakes").is(":hidden"))
  {
  	$("#menupancakes").slideDown("slow");
  }
  if (!($("#menushawrma").is(":hidden")))
  		{
  			$("#menushawrma").slideUp("slow");
  		}
  }
});

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});

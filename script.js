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

$("#menu-1").show("slow");
$("#menu-2").hide(1);


$("#button-1").click(function () {
  if (!($("#menu-2").is(":animated")))
  {
  	if ($("#menu-1").is(":hidden"))
  {
  	$("#menu-1").slideDown("slow");
  }
  if (!($("#menu-2").is(":hidden")))
  		{
  			$("#menu-2").slideUp("slow");
  		}
  }
});
$("#button-2").click(function () {
  if (!($("#menu-1").is(":animated")))
  {
  	if ($("#menu-2").is(":hidden"))
  {
  	$("#menu-2").slideDown("slow");
  }
  if (!($("#menu-1").is(":hidden")))
  		{
  			$("#menu-1").slideUp("slow");
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






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

$("#menu-1").show();
$("#menu-2").hide();
$("#menu-3").hide();
$("#menu-4").hide();
$("#menu-5").hide();


if ($(window).width() >= 992){
      	

		$("#button-1").click(function () {
  if (!($("#menu-2").is(":animated")||$("#menu-3").is(":animated")||$("#menu-4").is(":animated")||$("#menu-5").is(":animated")))
  {
  	if ($("#menu-1").is(":hidden"))
  {
  	$("#menu-1").slideDown("slow");
  }
  if (!($("#menu-2").is(":hidden")))
  		{
  			$("#menu-2").slideUp("slow");
  		}
  if (!($("#menu-3").is(":hidden")))
  		{
  			$("#menu-3").slideUp("slow");
  		}
  if (!($("#menu-4").is(":hidden")))
  		{
  			$("#menu-4").slideUp("slow");
  		}
  if (!($("#menu-5").is(":hidden")))
  		{
  			$("#menu-5").slideUp("slow");
  		}
  
  }
});

$("#button-2").click(function () {
  if (!($("#menu-1").is(":animated")||$("#menu-3").is(":animated")||$("#menu-4").is(":animated")||$("#menu-5").is(":animated")))
  {
  	if ($("#menu-2").is(":hidden"))
  {
  	$("#menu-2").slideDown("slow");
  }
  if (!($("#menu-1").is(":hidden")))
  		{
  			$("#menu-1").slideUp("slow");
  		}
  if (!($("#menu-3").is(":hidden")))
  		{
  			$("#menu-3").slideUp("slow");
  		}
  if (!($("#menu-4").is(":hidden")))
  		{
  			$("#menu-4").slideUp("slow");
  		}
  if (!($("#menu-5").is(":hidden")))
  		{
  			$("#menu-5").slideUp("slow");
  		}
  
  }
});

$("#button-3").click(function () {
  if (!($("#menu-1").is(":animated")||$("#menu-2").is(":animated")||$("#menu-4").is(":animated")||$("#menu-5").is(":animated")))
  {
  	if ($("#menu-3").is(":hidden"))
  {
  	$("#menu-3").slideDown("slow");
  }
  if (!($("#menu-1").is(":hidden")))
  		{
  			$("#menu-1").slideUp("slow");
  		}
  if (!($("#menu-2").is(":hidden")))
  		{
  			$("#menu-2").slideUp("slow");
  		}
  if (!($("#menu-4").is(":hidden")))
  		{
  			$("#menu-4").slideUp("slow");
  		}
  if (!($("#menu-5").is(":hidden")))
  		{
  			$("#menu-5").slideUp("slow");
  		}
  
  }
});

$("#button-4").click(function () {
  if (!($("#menu-1").is(":animated")||$("#menu-2").is(":animated")||$("#menu-3").is(":animated")||$("#menu-5").is(":animated")))
  {
  	if ($("#menu-4").is(":hidden"))
  {
  	$("#menu-4").slideDown("slow");
  }
  if (!($("#menu-1").is(":hidden")))
  		{
  			$("#menu-1").slideUp("slow");
  		}
  if (!($("#menu-2").is(":hidden")))
  		{
  			$("#menu-2").slideUp("slow");
  		}
  if (!($("#menu-3").is(":hidden")))
  		{
  			$("#menu-3").slideUp("slow");
  		}
  if (!($("#menu-5").is(":hidden")))
  		{
  			$("#menu-5").slideUp("slow");
  		}
  
  }
});

$("#button-5").click(function () {
  if (!($("#menu-1").is(":animated")||$("#menu-2").is(":animated")||$("#menu-3").is(":animated")||$("#menu-4").is(":animated")))
  {
  	if ($("#menu-5").is(":hidden"))
  {
  	$("#menu-5").slideDown("slow");
  }
  if (!($("#menu-1").is(":hidden")))
  		{
  			$("#menu-1").slideUp("slow");
  		}
  if (!($("#menu-2").is(":hidden")))
  		{
  			$("#menu-2").slideUp("slow");
  		}
  if (!($("#menu-4").is(":hidden")))
  		{
  			$("#menu-4").slideUp("slow");
  		}
  if (!($("#menu-3").is(":hidden")))
  		{
  			$("#menu-3").slideUp("slow");
  		}
  
  }
		});




      	} else{
         

$("#button-1").click(function () {
  if (!($("#menu-2").is(":animated")||$("#menu-3").is(":animated")||$("#menu-4").is(":animated")||$("#menu-5").is(":animated")))
  {
  	if ($("#menu-1").is(":hidden"))
  {
  	$("#menu-1").slideDown(0);
  }
  if (!($("#menu-2").is(":hidden")))
  		{
  			$("#menu-2").slideUp(0);
  		}
  if (!($("#menu-3").is(":hidden")))
  		{
  			$("#menu-3").slideUp(0);
  		}
  if (!($("#menu-4").is(":hidden")))
  		{
  			$("#menu-4").slideUp(0);
  		}
  if (!($("#menu-5").is(":hidden")))
  		{
  			$("#menu-5").slideUp(0);
  		}
  
  }
});

$("#button-2").click(function () {
  if (!($("#menu-1").is(":animated")||$("#menu-3").is(":animated")||$("#menu-4").is(":animated")||$("#menu-5").is(":animated")))
  {
  	if ($("#menu-2").is(":hidden"))
  {
  	$("#menu-2").slideDown(0);
  }
  if (!($("#menu-1").is(":hidden")))
  		{
  			$("#menu-1").slideUp(0);
  		}
  if (!($("#menu-3").is(":hidden")))
  		{
  			$("#menu-3").slideUp(0);
  		}
  if (!($("#menu-4").is(":hidden")))
  		{
  			$("#menu-4").slideUp(0);
  		}
  if (!($("#menu-5").is(":hidden")))
  		{
  			$("#menu-5").slideUp(0);
  		}
  
  }
});

$("#button-3").click(function () {
  if (!($("#menu-1").is(":animated")||$("#menu-2").is(":animated")||$("#menu-4").is(":animated")||$("#menu-5").is(":animated")))
  {
  	if ($("#menu-3").is(":hidden"))
  {
  	$("#menu-3").slideDown(0);
  }
  if (!($("#menu-1").is(":hidden")))
  		{
  			$("#menu-1").slideUp(0);
  		}
  if (!($("#menu-2").is(":hidden")))
  		{
  			$("#menu-2").slideUp(0);
  		}
  if (!($("#menu-4").is(":hidden")))
  		{
  			$("#menu-4").slideUp(0);
  		}
  if (!($("#menu-5").is(":hidden")))
  		{
  			$("#menu-5").slideUp(0);
  		}
  
  }
});

$("#button-4").click(function () {
  if (!($("#menu-1").is(":animated")||$("#menu-2").is(":animated")||$("#menu-3").is(":animated")||$("#menu-5").is(":animated")))
  {
  	if ($("#menu-4").is(":hidden"))
  {
  	$("#menu-4").slideDown(0);
  }
  if (!($("#menu-1").is(":hidden")))
  		{
  			$("#menu-1").slideUp(0);
  		}
  if (!($("#menu-2").is(":hidden")))
  		{
  			$("#menu-2").slideUp(0);
  		}
  if (!($("#menu-3").is(":hidden")))
  		{
  			$("#menu-3").slideUp(0);
  		}
  if (!($("#menu-5").is(":hidden")))
  		{
  			$("#menu-5").slideUp(0);
  		}
  
  }
});

$("#button-5").click(function () {
  if (!($("#menu-1").is(":animated")||$("#menu-2").is(":animated")||$("#menu-3").is(":animated")||$("#menu-4").is(":animated")))
  {
  	if ($("#menu-5").is(":hidden"))
  {
  	$("#menu-5").slideDown(0);
  }
  if (!($("#menu-1").is(":hidden")))
  		{
  			$("#menu-1").slideUp(0);
  		}
  if (!($("#menu-2").is(":hidden")))
  		{
  			$("#menu-2").slideUp(0);
  		}
  if (!($("#menu-4").is(":hidden")))
  		{
  			$("#menu-4").slideUp(0);
  		}
  if (!($("#menu-3").is(":hidden")))
  		{
  			$("#menu-3").slideUp(0);
  		}
  
  }
		});



      	}


 
  

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});

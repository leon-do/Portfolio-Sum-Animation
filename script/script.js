<!-- ================== about

	var AboutSwitch = "on";
    $("#about").click(function(){
    	if (AboutSwitch === "on"){

	        $("#about").animate({
	        	width:"100%",
	        	height:"100vh",
	        	margin:"0px"},function(){
	        		$("#aboutContent").show(500);
	        	});
	        
	        $("body").css("background-color","#5CA4A9");
	        $("#portfolio").hide(500);
	        $("#contact").hide(500);


	        AboutSwitch = "off";

    	} else if (AboutSwitch === "off"){

    		$("#about").animate({
	        width:"100px",
	        height:"100px"});
	        
	       	$("body").css("background-color","black");
	        $("#aboutContent").hide(500);
	        $("#portfolio").show(500);
	        $("#contact").show(500);
	        AboutSwitch = "on";
    	}
	});


<!-- ================== portfolio

	var PortfolioSwitch = "on";
    $("#portfolio").click(function(){
    	if (PortfolioSwitch === "on"){

	        $("#portfolio").animate({
	        	width:"100%",
	        	height:"100vh",
	        	margin:"0px"},function(){
	        		$("#portfolioContent").show(100);
	        	});
	        
	        $("#about").hide(500);
	        $("#contact").hide(500);


	        PortfolioSwitch = "off";

    	} else if (PortfolioSwitch === "off"){

    		$("#portfolio").animate({
	        width:"100px",
	        height:"100px",});
	        
	       	$("body").css("background-color","#ED6A5A");
	        $("#portfolioContent").hide(500);
	        $("#about").show(500);
	        $("#contact").show(500);
	        PortfolioSwitch = "on";
    	}
	});


<!-- ================== contact

	var ContactSwitch = "on";
    $("#contact").click(function(){
    	if (ContactSwitch === "on"){

	        $("#contact").animate({
	        	width:"100%",
	        	height:"100vh",
	        	margin:"0px"}, function(){
	        		$("#contactContent").show(500);
	        	});
	        
	        $("#portfolio").hide(500);
	        $("#about").hide(500);


	        ContactSwitch = "off";

    	} else if (ContactSwitch === "off"){

    		$("#contact").animate({
	        width:"100px",
	        height:"100px"});
	        
	       	$("body").css("background-color","#E6EBE0");
	        $("#contactContent").hide(500);
	        $("#portfolio").show(500);
	        $("#about").show(500);
	        ContactSwitch = "on";
    	}
	});
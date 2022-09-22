window.onload = function() {
	var frame1 = $("#frame1"),
		frame2 = $("#frame2"),
		frame3 = $("#frame3"),
		frame4 = $("#frame4"),
		frame5 = $("#frame5"),
		orangeViolin1 = $("#orangeViolin1"),
		orangeViolin2 = $("#orangeViolin2"),
		orangeViolin3 = $("#orangeViolin3"),
		redViolin2 = $("#redViolin2"),
		redViolin3 = $("#redViolin3"),
		redViolin4 = $("#redViolin4"),
		tl = new TimelineLite();
	
	tl.from(logoBig, 0.5, {opacity:0, ease:Back.easeOut})
	  .to(logoBig, 0.5, {y:-188, scale:0.8, ease:Back.easeIn})
	  .to(frame1, 0.5, {opacity:0, display:"none", ease:Expo.easeOut});
	  
	tl.to(frame2, 0.5, {opacity:1, ease:Expo.easeOut}, "-=0.5")
	  .from("#orangeGuitar1", 0.5, {x:200, ease:Back.easeOut}, "guitar")
	  .from("#redGuitar", 0.5, {x:-200, ease:Back.easeOut}, "guitar")
	  .to(frame2, 0.5, {scale:0,opacity:0, display:"none", ease:Expo.easeOut, delay:0.5});
	  
	tl.to(frame3, 0.5, {opacity:1, ease:Expo.easeOut}, "-=0.25").from(frame3, 0.5, {scale:0, ease:Expo.easeOut}, "-=0.25")
	  .to(".tabSmall", 0.5, {top:"365px",ease:Back.easeOut},"-=0.5")
	  .from("#yellowGuitar1", 1, {scale:0, ease:Back.easeOut},"f3guitar")
	  .from("#yellowGuitar2", 1, {opacity:0, rotation:360,ease:Back.easeOut},"f3guitar+=0.25")
	  .from("#redViolin1", 1, {x:140, ease:Bounce.easeOut},"f3guitar")
	  .from("#greenGuitar", 1, {opacity:0,rotation:-360,ease:Back.easeOut},"f3guitar+=0.25")
	  .to(".tabSmall", 0.5, {top:"900px",ease:Back.easeIn, delay:1})
	  .to(frame3, 0.5, {scale:0,opacity:0, display:"none", ease:Expo.easeOut});
	  
	tl.to(frame4, 0.5, {left:"0px", ease:Back.easeOut},"-=0.5")
	  .staggerFrom([orangeViolin1,orangeViolin2,orangeViolin3,redViolin2,redViolin3,redViolin4],1,{top:"-300px", scale:0.2, ease:Back.easeOut}, 0.15)
	  .to(frame4, 0.5, {opacity:0, display:"none", ease:Expo.easeIn, delay:0.5});
	  
	tl.to(frame5, 0.5, {opacity:1, ease:Expo.easeOut},"-=0.5")
	  .from("#orangeGuitar2", 1, {scale:0, rotation:360, ease:Back.easeOut},"+=0.25");
	

	$('.more').click( function() { 
			$("#expanded").show('fast');
			$("#frame5").hide('fast');
			tl.from("#logoBigger", 1, {scale:0, ease:Back.easeOut} )
			  .from("#yellowGuitar3", 1, {scale:0, ease:Back.easeOut},"-=0.5")
	          .from("#yellowGuitar4", 1, {opacity:0, rotation:360,ease:Back.easeOut},"-=1")
	          .from("#redViolin5", 1, {x:240, ease:Bounce.easeOut},"-=1.5")
	          .from("#greenGuitar2", 1, {opacity:0,rotation:-360,ease:Back.easeOut},"-=1.5");
		});
	$('#close').click( function() { 
			$("#frame5").show('fast');
			$("#expanded").hide('fast');
			tl.to(frame5, 0.5, {opacity:1, ease:Expo.easeOut},"-=0.5")
	          .from("#orangeGuitar2", 1, {scale:0, rotation:360, ease:Back.easeOut},"+=0.25");
		});
	
	
	
	
}
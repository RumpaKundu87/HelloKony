function slideDown(){
spalshScreen.imgLogo.animate(
kony.ui.createAnimation({"100":{"centerX":"50%","centerY":"50%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":2},
 {"animationEnd" : function(){navigateToLoginScreen()}});

}


function navigateToLoginScreen(){
	
	loginScreen.show();
	//spalshScreen.destroy();
}


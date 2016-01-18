$(document).ready(function(){

	var pd1urlInd = ["url(Media/projectPics/sumoBot/sb1.JPG)", "url(Media/projectPics/sumoBot/sb2.PNG)", "url(Media/projectPics/sumoBot/sb3.PNG)", "url(Media/projectPics/sumoBot/sb4.PNG)", "url(Media/projectPics/sumoBot/sb5.JPG)", "url(Media/projectPics/sumoBot/sb6.JPG)"];
	var counter = 0;
	var mod = counter % (pd1urlInd.length);

	$("#pd1").css("backgroundImage", pd1urlInd[mod]);
	
	counter++;
	mod = counter % (pd1urlInd.length);
	setInterval(function(){
			$("#pd1").css("backgroundImage", pd1urlInd[mod]);
			counter++;
			mod = counter % (pd1urlInd.length);


	}, 3000);


});

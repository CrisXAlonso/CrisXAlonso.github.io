$(document).ready(function(){

	var pd1urlInd = ["url(Media/projectPics/sumoBot/sb1.JPG)", "url(Media/projectPics/sumoBot/sb2.PNG)", "url(Media/projectPics/sumoBot/sb3.PNG)", "url(Media/projectPics/sumoBot/sb4.PNG)", "url(Media/projectPics/sumoBot/sb5.JPG)", "url(Media/projectPics/sumoBot/sb6.JPG)"];
	var pd2urlInd = ["url(Media/projectPics/quadCopter/qc1.JPG)", "url(Media/projectPics/quadCopter/qc2.JPG)", "url(Media/projectPics/quadCopter/qc3.JPG)","url(Media/projectPics/quadCopter/qc4.JPG)"];
	var id1urlInd = ["url(Media/hikingPics/Ezra/et1.JPG)", "url(Media/hikingPics/Ezra/et2.JPG)", "url(Media/hikingPics/Ezra/et3.JPG)", "url(Media/hikingPics/Ezra/et4.JPG)"];
	var id2urlInd = ["url(Media/hikingPics/Flower/fp1.JPG)", "url(Media/hikingPics/Flower/fp2.JPG)", "url(Media/hikingPics/Flower/fp3.JPG)", "url(Media/hikingPics/Flower/fp4.JPG)"];
	var id3urlInd = ["url(Media/hikingPics/Redwood/rw1.JPG)", "url(Media/hikingPics/Redwood/rw2.JPG)", "url(Media/hikingPics/Redwood/rw3.JPG)", "url(Media/hikingPics/Redwood/rw4.JPG)"];
	var id4urlInd = ["url(Media/hikingPics/Toga/t1.JPG)", "url(Media/hikingPics/Toga/t2.JPG)", "url(Media/hikingPics/Toga/t3.JPG)", "url(Media/hikingPics/Toga/t4.JPG)"];
	var counter = 0;
	var mod1 = counter % (pd1urlInd.length);
	var mod2 = counter % (pd2urlInd.length);
	var modi = counter % (id1urlInd.length);

	$("#pd1").css("backgroundImage", pd1urlInd[mod1]);
	$("#pd2").css("backgroundImage", pd2urlInd[mod2]);
	$("#id1").css("backgroundImage", id1urlInd[modi]);
	$("#id2").css("backgroundImage", id2urlInd[modi]);
	$("#id3").css("backgroundImage", id3urlInd[modi]);
	$("#id4").css("backgroundImage", id4urlInd[modi]);

	counter++;
	mod1 = counter % (pd1urlInd.length);
	mod2 = counter % (pd2urlInd.length);
	modi = counter % (id1urlInd.length);
	setInterval(function(){
			$("#pd1").css("backgroundImage", pd1urlInd[mod1]);
			$("#pd2").css("backgroundImage", pd2urlInd[mod2]);
			$("#id1").css("backgroundImage", id1urlInd[modi]);
			$("#id2").css("backgroundImage", id2urlInd[modi]);
			$("#id3").css("backgroundImage", id3urlInd[modi]);
			$("#id4").css("backgroundImage", id4urlInd[modi]);
			counter++;
			mod1 = counter % (pd1urlInd.length);
			mod2 = counter % (pd2urlInd.length);
			modi = counter % (id1urlInd.length);


	}, 3000);


});

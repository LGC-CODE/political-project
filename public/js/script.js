document.addEventListener('DOMContentLoaded', function(ev){

	var video = document.getElementById('myVid');

	video.volume = 0.0;
	video.autoplay = true;

	setTimeout(function(){
		video.play();
	}, 1000);

	video.load();

	var volumeHide = document.getElementById('volume-up');

	volumeHide.onclick = function(){
		video.volume = 1.0;
		video.load();
		video.play();
		volumeHide.className = 'volume-hide';
	}

});
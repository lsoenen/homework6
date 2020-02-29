var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	console.log("Play Video");
	console.log(video);
	//set the volume variable
	volume=document.querySelector("#volume")
	console.log(volume)
	volume.innerHTML = video.volume * 100 + "%";

	//change its text

}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate -=.1
  console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate +=.1
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60
	console.log("Current location is "+ video.currentTime + 60 );
}

function mute() {
	// console.log(video.muted)
	if (video.muted){
		video.muted=false;
  	console.log("Changing to Unmuted");

			}
	else{
		video.muted = true;
    console.log("Changing to Muted");
			}
			var button = document.querySelector('#mute');
		button.innerHTML="Unmuted"
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume=slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = (video.volume *100) + "%";

}
//
//
// function gray() {
//
// 	console.log("In grayscale")
// }
//
// function color() {
//
// 	console.log("In color")
// }

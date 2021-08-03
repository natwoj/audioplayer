var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var playerAudio = document.getElementById("player-audio");
var progress = document.getElementById("progress-on");
var resTime = 0;

function ChangePlayToPauseButton () {
    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");

    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");

    doPlay();
    function doPlay() {
        playerAudio.play();
    }
    songProgress();
}

function ChangePauseButtonToPlayButton() {
    pauseButton.classList.remove("pause-button-on");
    pauseButton.classList.add("pause-button-off");

    playButton.classList.remove("play-button-off");
    playButton.classList.add("play-button-on");

    doPause();
    function doPause() {
        playerAudio.pause();
    }
    songProgress();
}

}
function songProgress {
    progress.offsetWidth = 0;
    var id = setInterval(frame,5);

    function frame () {
        if (playerAudio.readyState) {
            resTime = (playerAudio.currentTime*356)/playerAudio.duration;
            progress.style.width = resTime; 
        }
    }
}
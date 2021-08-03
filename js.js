var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var playerAudio = document.getElementById("player-audio");

function ChangePlayToPauseButton () {
    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");

    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");

    doPlay();
    function doPlay() {
        playerAudio.play();
    }
}

document.get.innerHTML = ChangePlayToPause ();
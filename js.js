var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var playerAudio = document.getElementById("player-audio");
var progress = document.getElementById("progress-on");
var resTime = 0;

var i = 0;
var song0 = document.getElementById("song-0");
var song1 = document.getElementById("song-1");
var song2 = document.getElementById("song-2");
var song3 = document.getElementById("song-3");
var song4 = document.getElementById("song-4");
var song5 = document.getElementById("song-5");

var time0 = document.getElementById("time-0");
var time1 = document.getElementById("time-1");
var time2 = document.getElementById("time-2");
var time3 = document.getElementById("time-3");
var time4 = document.getElementById("time-4");
var time5 = document.getElementById("time-5");

var songTable = ["/mp/utwor-pierwszy.mp3","/mp/utwor-drugi.mp3","/mp/utwor-trzeci.mp3","/mp/utwor-czwarty.mp3","/mp/utwor-piąty.mp3", "/mp/utwor-szosty.mp3"]

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

function PlayerFirstSong {
 i = 0;
    playerAudio.src =  songTable[0];
    song0.classList.add("brown-title-song-0");
    song1.classList.remove("brown-title-song-1");
    song2.classList.remove("brown-title-song-2");
    song3.classList.remove("brown-title-song-3");
    song4.classList.remove("brown-title-song-4");
    song5.classList.remove("brown-title-song-5");

    time0.classList.add("time0");
    time1.classList.remove("time1");
    time2.classList.add("time2");
    time3.classList.add("time3");
    time4.classList.add("time4");
    time5.classList.add("time5");

    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");

    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");

    playerAudio.play();
    songProgress();
}

function PlayerSecondSong {
    i = 1;
       playerAudio.src =  songTable[1];
       song1.classList.add("brown-title-song-1");
       song0.classList.remove("brown-title-song-0");
       song2.classList.remove("brown-title-song-2");
       song3.classList.remove("brown-title-song-3");
       song4.classList.remove("brown-title-song-4");
       song5.classList.remove("brown-title-song-5");
   
       time1.classList.add("time1");
       time0.classList.remove("time0");
       time2.classList.add("time2");
       time3.classList.add("time3");
       time4.classList.add("time4");
       time5.classList.add("time5");
   
       playButton.classList.remove("play-button-on");
       playButton.classList.add("play-button-off");
   
       pauseButton.classList.remove("pause-button-off");
       pauseButton.classList.add("pause-button-on");
   
       playerAudio.play();
       songProgress();
   }

   function PlayerThirdSong {
    i = 2;
       playerAudio.src =  songTable[2];
       song2.classList.add("brown-title-song-2");
       song0.classList.remove("brown-title-song-0");
       song1.classList.remove("brown-title-song-1");
       song3.classList.remove("brown-title-song-3");
       song4.classList.remove("brown-title-song-4");
       song5.classList.remove("brown-title-song-5");
   
       time2.classList.add("time2");
       time0.classList.remove("time0");
       time1.classList.add("time1");
       time3.classList.add("time3");
       time4.classList.add("time4");
       time5.classList.add("time5");
   
       playButton.classList.remove("play-button-on");
       playButton.classList.add("play-button-off");
   
       pauseButton.classList.remove("pause-button-off");
       pauseButton.classList.add("pause-button-on");
   
       playerAudio.play();
       songProgress();
   }

   function PlayerFourthSong {
    i = 3;
       playerAudio.src =  songTable[3];
       song3.classList.add("brown-title-song-3");
       song0.classList.remove("brown-title-song-0");
       song1.classList.remove("brown-title-song-1");
       song2.classList.remove("brown-title-song-2");
       song4.classList.remove("brown-title-song-4");
       song5.classList.remove("brown-title-song-5");
   
       time3.classList.add("time3");
       time0.classList.remove("time0");
       time2.classList.add("time2");
       time3.classList.add("time3");
       time4.classList.add("time4");
       time5.classList.add("time5");
   
       playButton.classList.remove("play-button-on");
       playButton.classList.add("play-button-off");
   
       pauseButton.classList.remove("pause-button-off");
       pauseButton.classList.add("pause-button-on");
   
       playerAudio.play();
       songProgress();
   }

   function PlayerFifthSong {
    i = 4;
    playerAudio.src =  songTable[4];
    song4.classList.add("brown-title-song-4");
    song0.classList.remove("brown-title-song-0");
    song1.classList.remove("brown-title-song-1");
    song2.classList.remove("brown-title-song-2");
    song3.classList.remove("brown-title-song-3");
    song5.classList.remove("brown-title-song-5");

    time4.classList.add("time4");
    time0.classList.remove("time0");
    time1.classList.remove("time1");
    time2.classList.remove("time2");
    time3.classList.remove("time3");
    time5.classList.remove("time5");

    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");

    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");

    playerAudio.play();
    songProgress();
   }

   function PlayerSixthSong() {
    i = 5;
    playerAudio.src =  songTable[5];
    song5.classList.add("brown-title-song-5");
    song0.classList.remove("brown-title-song-0");
    song1.classList.remove("brown-title-song-1");
    song2.classList.remove("brown-title-song-2");
    song3.classList.remove("brown-title-song-3");
    song4.classList.remove("brown-title-song-4");

    time5.classList.add("time5");
    time0.classList.remove("time0");
    time1.classList.remove("time1");
    time2.classList.remove("time2");
    time3.classList.remove("time3");
    time4.classList.remove("time4");

    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");

    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");

    playerAudio.play();
    songProgress();


   }
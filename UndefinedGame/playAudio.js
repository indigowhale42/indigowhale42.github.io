var sound = new Audio();

sound.src = "music/kokobop.mp3";

sound.play();

/* // Normal way!!!

<audio controls="controls">
 <source src="music.ogg" type="audio/ogg" />
 <source src="music.mp3" type="audio/mpeg" />
 Your browser does not support HTML5 Audio. Please shift to a newer browser.
</audio>
    <script>
 var audio = document.createElement("audio");
 var mp3Support, oggSupport;
 if (audio.canPlayType) {
 // Currently canPlayType() returns: "", "maybe", or "probably"
 mp3Support = "" !== audio.canPlayType("audio/mpeg");
 oggSupport = "" !== audio.canPlayType("audio/ogg; codecs=\"vorbis\"");
 } else {
 // The audio tag is not supported
 mp3Support = false;
 oggSupport = false;
 }
 // Check for ogg, then mp3, and finally set soundFileExtn to undefined
 var soundFileExtn = oggSupport ? ".ogg" : mp3Support ? ".mp3" : undefined;
 if (soundFileExtn) {
 var sound = new Audio();
 // Load sound file with the detected extension
 sound.src = "music" + soundFileExtn;
 sound.play();
 }
</script>
*/

 //var sound = new Audio("music/kokobop.mp3");
                /*
                var audio = document.createElement("audio");
                var mp3Support;
                if (audio.canPlayType) {
                    mp3Support = "" !== audio.canPlayType("audio/mpeg");
                } else {
                    mp3Support = false;
                }

                if (mp3Support) {
                    var sound = new Audio("kokobop.mp3");
                    sound.autoplay = true;
                    sound.play();
                } 
                */
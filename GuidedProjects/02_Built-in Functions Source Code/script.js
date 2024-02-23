const audio = document.getElementById("audio")
console.log(audio)

const originalList = [...songs]
let currentSongIndex = 0;
console.log(originalList)

function playSong(playList){
 audio.onpause();
 //audio.src = playList[currentSongIndex]
}

function updateUI( currentSongIndex, playList)
{
    document.getElementById("song-title").textContent = playList[currentSongIndex].title
    document.getElementById("song-artist").textContent = playList[currentSongIndex]["artist-name"]

}

updateUI(currentSongIndex, originalList)
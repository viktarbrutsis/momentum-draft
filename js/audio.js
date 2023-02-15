import playList from "./playList.js";
console.log(playList);

const audio = new Audio(),
      play = document.querySelector('.play'),
      playNext = document.querySelector('.play-next'),
      playPrev = document.querySelector('.play-prev'),
      musicList = document.querySelector('.play-list');

let isPlay = false;

let trackNumber = 0;
console.log(trackNumber);

function playAudio() {
 
      audio.src = playList[trackNumber].src;
      audio.currentTime = 0;
      audio.play();
   
}

function pauseAudio() {
   audio.pause();
}

function togglePlayBtn() {
   play.classList.toggle('pause');
}

play.addEventListener('click', () => {
   if (!isPlay) {
      togglePlayBtn();
      playAudio();
      isPlay = true;
   } else {
      togglePlayBtn();
      pauseAudio();
      isPlay = false;
   }
});

playNext.addEventListener('click', () => {
   trackNumber++;
   console.log(trackNumber);
   if (trackNumber < playList.length) {
      playAudio();
      console.log(trackNumber);
      console.log(playList[trackNumber].title);
   } if (trackNumber == playList.length) {
      trackNumber = 0;
      playAudio();
   }
});

playPrev.addEventListener('click', () => {
   trackNumber--;
   console.log(trackNumber);
   if (trackNumber >=0) {
      playAudio();
      console.log(trackNumber);
      console.log(playList[trackNumber].title);
   } if (trackNumber < 0) {
      trackNumber = 3;
      console.log(playList[trackNumber].title);
      playAudio();
   }
});

let musicListItem;

for (let i = 0; i < playList.length; i++) {
   musicListItem = document.createElement('li');
   musicListItem.classList.add('play-item');
   musicListItem.textContent = playList[i].title;
   musicList.append(musicListItem);
}


import  Player  from '@vimeo/player';
import throttle from 'lodash.throttle';




const player = new Player('vimeo-player');


player.on(
    'timeupdate',
    throttle(function (data) {
        localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000)
);




const playerCurrentTime = localStorage.getItem('videoplayer-current-time');

if (playerCurrentTime) {
  player
  .setCurrentTime(playerCurrentTime)
  .then(function () {
    console.log('Video start time set to ' + playerCurrentTime + ' seconds');
  }).catch(function (error) {
    console.log(error);
  });
}

function playFromLocalStorage() {
  player
  .play()
  .then(function () {
    console.log('Video resumed from ' + playerCurrentTime + ' seconds');
  }).catch(function (error) {
    console.log(error);
  });
}

// Listen for click on the play button
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', playFromLocalStorage);
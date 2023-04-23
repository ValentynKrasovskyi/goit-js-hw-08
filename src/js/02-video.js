import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.querySelector('#vimeo-player');

const player = new Player(videoEl);
console.log(player)


player.on('play', function () {
        console.log('played the video!');
    });
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    player.on('timeupdate', throttle(function(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
    }, 1000));
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
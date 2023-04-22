import Player from '@vimeo/player';

const videoEl = document.querySelector('#vimeo-player');

const player = new Player(videoEl);
console.log(player)


player.on('play', function () {
        console.log('played the video!');
    });
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', function () {
    localStorage.setItem('videoplayer-current-time', timeupdate)
    console.log(localStorage.getItem(videoplayerCurrentTime))
    })
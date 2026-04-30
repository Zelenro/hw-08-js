import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveTime = throttle(function (data) {
  const timePlayer = JSON.stringify(data.seconds);
  localStorage.setItem('videoplayer-current-time', timePlayer);
}, 1000);

function readTime() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}

player.ready().then(readTime);
player.on('timeupdate', saveTime);

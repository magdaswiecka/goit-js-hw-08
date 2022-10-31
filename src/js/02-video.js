import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const rememberedSeconds = localStorage.getItem("videoplayer-current-time");

if(rememberedSeconds) {
  player.setCurrentTime(rememberedSeconds)
}

const func = (data) => {
  console.log('timeupdate!', data.seconds);

  localStorage.setItem("videoplayer-current-time", data.seconds)
};

const throttledFunc = throttle(func, 1000);

player.on('timeupdate', throttledFunc);


const playSound = (src: string, isRepeat = false) => {
  const tempSound = document.createElement('audio');
  tempSound.src = src;
  tempSound.loop = isRepeat;
  tempSound.volume = 0.1;
  tempSound.play();
};

export default playSound;

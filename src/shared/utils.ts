const playSound = (() => {
  const soundStore: Map<string, HTMLAudioElement> = new Map();

  return (src: string, isRepeat = false) => {
    const sound = soundStore.get(src);

    if (sound) {
      sound.load();
      sound.play();

      return;
    }
    const tempSound = document.createElement('audio');
    tempSound.src = src;
    tempSound.loop = isRepeat;
    tempSound.volume = 0.1;
    tempSound.play();

    soundStore.set(src, tempSound);
  };
})();

export default playSound;

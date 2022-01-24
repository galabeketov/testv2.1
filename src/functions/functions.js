// import { useState } from "react";
const speak = (text) => {
  let synth = window.speechSynthesis;
  let voices = synth.getVoices();
  let utterance1 = new SpeechSynthesisUtterance(text);
  utterance1.voice = voices[1];
  synth.speak(utterance1);
};
// const [pause, setPause] = useState(null);
const slowSpeak = (text) => {
  let synth = window.speechSynthesis;
  let voices = synth.getVoices();
  let utterance1 = new SpeechSynthesisUtterance(text);
  utterance1.voice = voices[1];
  // utterance1.pitch = 1;
  utterance1.rate = 0.4;

  synth.speak(utterance1);
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export { speak, shuffle, slowSpeak };

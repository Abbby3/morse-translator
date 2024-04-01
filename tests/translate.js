const dictionary = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  " ": "/",
};

const reverseDictionary = Object.entries(dictionary).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});

function toMorse(input) {
  const textInputValue = input.toUpperCase().split("");
  let morse = textInputValue
    .map((char) => {
      if (dictionary[char]) {
        return dictionary[char];
      } else {
        return "";
      }
    })
    .filter((morseChar) => morseChar !== "")
    .join(" ");
  return morse;
}

function toText(input) {
  const morseInputValue = input.trim().split(" ");
  let text = morseInputValue
    .map((char) => {
      if (reverseDictionary[char]) {
        return reverseDictionary[char];
      } else {
        return "";
      }
    })
    .join("");
  return text;
}

export { toMorse, toText };

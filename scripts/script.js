const textInput = document.getElementById("textInput");
const morseInput = document.getElementById("morseInput");
const info = document.getElementById("info");
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

function toMorse() {
  const textInputValue = textInput.value.toUpperCase().split("");

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
  morseInput.value = morse;

  let invalidChars = Array.from(textInputValue).filter((char) => !dictionary[char] && char !== "");
  if (invalidChars.length > 0) {
    info.textContent = `Text error: '${invalidChars.join(" ")}' is invalid and will be ignored.`;
  } else {
    info.textContent = "";
  }
}
textInput.addEventListener("input", toMorse);

function toText() {
  const morseInputValue = morseInput.value.split(" ");
  let text = morseInputValue
    .map((char) => {
      if (reverseDictionary[char]) {
        return reverseDictionary[char];
      } else {
        return "";
      }
    })
    .join("");
  textInput.value = text;

  let invalidChars = Array.from(morseInputValue).filter(
    (char) => !reverseDictionary[char] && char !== ""
  );
  if (invalidChars.length > 0) {
    info.textContent = `Morse error: '${invalidChars.join(" ")}' is invalid and will be ignored.`;
  } else {
    info.textContent = "";
  }
}
morseInput.addEventListener("input", toText);

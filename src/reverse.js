export default function reverse(text) {
  let flippedWord = "";

  for (let i = text.length - 1; i >= 0; i--) {
    flippedWord += text[i];
  }

  return flippedWord;
}

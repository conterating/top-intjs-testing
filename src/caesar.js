export default function cipher(text, shiftKey) {
  let cipherString = "";
  for (const letter of text) {
    let newPos = getAlphabetPosition(letter) + shiftKey;
    if (newPos > 26) {
      newPos %= 26;
    }

    cipherString += getLetter(newPos);
  }

  return cipherString;
}

function getAlphabetPosition(letter) {
  return letter.toUpperCase().charCodeAt(0) - 64;
}

function getLetter(charCode) {
  return String.fromCharCode(64 + charCode);
}

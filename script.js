let textInput = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");

textInput.addEventListener("input", function () {
  memeText.innerHTML = textInput.value;
});

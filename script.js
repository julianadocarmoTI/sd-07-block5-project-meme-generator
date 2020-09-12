window.onload = function () {
  // seleciona o id text-input
  let textInput = document.querySelector('#text-input');
  // seleciona o id meme-insert
  let memeInsert = document.querySelector('#meme-insert');
  // seleciona a div com id meme-image-container
  let container = document.querySelector('#meme-image-container');
  // seleciona o botão id fire
  let btnFire = document.querySelector('#fire');
  // seleciona o botão id water
  let btnWater = document.querySelector('#water');
  // seleciona o botão id earth
  let btnEarth = document.querySelector('#earth');
  // cria o elemento span
  let memeText = document.createElement('span');
  // Criar o elemento img
  let memeImage = document.createElement('img');
  // função que adiciona um evento listener ao textInput
  textInput.addEventListener('keyup', function() {
    memeText.innerText = textInput.value;
  });
  // função que adiciona um evento listener ao imageInput
  memeInsert.addEventListener('change', function() {
    memeImage.src = URL.createObjectURL(this.files[0]);
  });
  // funcção que adiciona evento em btnFire
  btnFire.addEventListener('click', function() {
    container.style.border = '3px dashed red';
  });
  // funcção que adiciona evento em btnWater
  btnWater.addEventListener('click', function() {
    container.style.border = '5px double blue';
  });
  // funcção que adiciona evento em btnEarth
  btnEarth.addEventListener('click', function() {
    container.style.border = '6px groove green';
  });
  // Atribui a id meme-text a memeText
  memeText.id = 'meme-text';
  memeText.className = 'meme-text'
  // Atribui a id meme-image a memeImage
  memeImage.id = 'meme-image';
  memeImage.className = 'meme-image';
  // Inserir memeText como filho de container
  container.appendChild(memeText);
  // Inserir memeImage como filho de container
  container.appendChild(memeImage);
}

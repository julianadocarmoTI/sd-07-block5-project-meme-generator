window.onload = function(){
    const containerMeme = document.querySelector('#meme-image-container');
    const textInput = document.querySelector('#text-input');
    const fotoInput = document.querySelector('#input-foto');
    const imgPhoto = document.querySelector('#meme-image');
    fotoInput.addEventListener('change',function(event){
        let file = event.target.files[0];
        console.log(file);
        let url = URL.createObjectURL(file);
        imgPhoto.src=url;
    })
}

function openImage(){
    fotoInput = URL.createObjectURL(file);
}

openImage();
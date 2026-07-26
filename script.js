



const thumb = document.querySelectorAll('.portfolio-item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

thumb.forEach((img) => {
    img.onclick = () => {
        lightboxImg.src = img.src;

    lightbox.classList.add('ativo');

}

lightbox.onclick = () => {
    lightbox.classList.remove('ativo');
}



async function moverFoto() {
    fotoPerfil.classList.add('mover');
}

moverFoto();

})

window.addEventListener('load', function() {
    const foto = document.querySelector('.foto').classList.add('entrar');
    
    
})


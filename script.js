onload = () =>{
        document.body.classList.remove("container");
};


var audio = document.getElementById('myAudio');

function playAudio() {
  audio.play().then(() => {
    document.removeEventListener('mousemove', playAudio);
    document.removeEventListener('touchstart', playAudio);
  }).catch(error => {
    console.log('Reproducción bloqueada:', error);
  });
}
document.addEventListener('mousemove', playAudio);
document.addEventListener('touchstart', playAudio);

function playSound(e){
    //console.log(e);
    //console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop function
    key.classList.add('playing');
    audio.currentTime = 0; //rewind to the start
    audio.play()
    //console.log(key);
    
}

function removeTransition(e) {
    //console.log(e);
    //console.log(e.type);
    //console.log(e.propertyName);
    if (e.propertyName !== 'transform') return;
   this.classList.remove('playing');
}
const keys= document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
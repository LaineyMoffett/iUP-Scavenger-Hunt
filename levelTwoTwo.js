import confetti from 'https://cdn.skypack.dev/canvas-confetti'; 

function party(){
    confetti()
}
document.getElementById('clickme').addEventListener('click', party)

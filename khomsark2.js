const submit = document.querySelector('.a');

submit.addEventListener('click', a)
let isVisible = false;

function a() {
    isVisible = !isVisible;
    if (isVisible === true) {
        const word = document.querySelector('.mor1');
        word.classList.add('blue');
        const time = document.querySelector('.time');
        time.textContent = "Night time!";
        const body = document.querySelector('body');
        body.classList.add('body');
        const textNight = document.querySelector('.night');
        textNight.textContent = "day mode.";
        const head = document.querySelector('h1');
        head.textContent = "Good Night";
        const textSubmit = document.querySelector('button');
        textSubmit.textContent = "Activate day mode"

    } else if (isVisible === false) {
        const word = document.querySelector('.mor1');
        word.classList.remove('blue');
        const body = document.querySelector('body');
        body.classList.remove('body');
        const time = document.querySelector('.time');
        time.textContent = "Day time!";
        const textnight = document.querySelector('.night');
        textnight.textContent = "night mode.";
        const head = document.querySelector('h1');
        head.textContent = "Good Morning";
        const textSubmit = document.querySelector('button');
        textSubmit.textContent = "Activate night mode"


    }
}
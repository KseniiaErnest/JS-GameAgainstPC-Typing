'use strict'

// 1. Logic for the _typing text_
const text = 'Game against PC 💻';
let i = 0;

function type() {
  if (i < text.length) {
    document.querySelector('#typing-text').textContent += text.charAt(i);
    i++;
    setInterval(type, 250);
  }
};

type();

// 2. Logic for the game
const inputField = document.querySelector('#number-input');
const button = document.querySelector('#btn');
const answerPC = Math.floor(Math.random() * 20) + 1;

inputField.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    playGame();
  }
})

button.addEventListener('click', playGame);

function playGame() {
  const userNumber = inputField.value;

  if (userNumber < 1 || userNumber > 20) {
    Swal.fire('Enter a number from 1 to 20, please')
  } else if (isNaN(userNumber)) {
    Swal.fire('Use only numbers, please')
  } else {
    if (userNumber < answerPC) {
      Swal.fire('Try a higher number!')
    } else if (userNumber > answerPC) {
      Swal.fire('Try a lower number!')
    } else {
      Swal.fire({
        title: 'You won!!!',
        width: 600,
        padding: '3em',
        color: '#000000',
        background: '#f2fce4 url(/images/trees.png)',
        backdrop: `
        rgb(116, 160, 18, 0.4)
          url("https://media.tenor.com/xzjlrhYq_lQAAAAi/cat-nyan-cat.gif")
          left top
          no-repeat
        `
      })
    }
  }
}

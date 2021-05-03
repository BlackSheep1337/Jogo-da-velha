// global variables
const blocksWrap = document.getElementById('game-blocks');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const prop1 = window.getComputedStyle(player1, null)
.getPropertyValue('background-color');
const prop2 = window.getComputedStyle(player2, null)
.getPropertyValue('background-color');


// creates rows of blocks
const addBlocksRow = () => {
  const row = 3;
  for (let i = 0; i < row; i += 1) {
    const blockRow = document.createElement('div');
    blockRow.classList.add('blockRow');
    blocksWrap.appendChild(blockRow);
  }
}
addBlocksRow();

// creates columns of blocks
const addBlocksCol = () => {
  const blocksRow = blocksWrap.childNodes;
  const col = blocksRow.length;
  blocksRow.forEach((b) => {
    for (let i = 0; i < col; i += 1) {
      const block = document.createElement('div');
      block.classList.add('blockCol');
      b.appendChild(block);
    }
  });
}
addBlocksCol();

// transition moviment from one player to another.
const transitionMove = () => {
  const blocks = document.querySelectorAll('.blockCol');
  for(let i = 0; i < blocks.length; i += 1) {
    blocks[i].addEventListener('click', (e) => {
      const blocks = e.target;
      player1.classList.toggle('turnOff');
      player2.classList.toggle('turnOff');

      if (player2.classList.contains('turnOff')) {
        blocks.classList.add('clickedO');
        blocks.innerHTML = 'O'
        blocks.style.background = prop2
        blocks.style.pointerEvents = 'none';
      } else {
        blocks.classList.add('clickedX');
        blocks.innerHTML = 'X';
        blocks.style.background = prop1;
        blocks.style.pointerEvents = 'none';
      }
    });
  }
}
transitionMove();

// enumerate blocks
const enumerateBlocks = () => {
  const blocks = document.querySelectorAll('.blockCol');
  for (let i = 0; i < blocks.length; i += 1) {
    blocks[i].classList.add(`block${i}`);
  }
}
enumerateBlocks();


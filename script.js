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

// win logic
const logicWin = () => {
  const blocks = document.querySelectorAll('.blockCol');

  const a1 = window.getComputedStyle(blocks[0], null).getPropertyValue("background-color");
  const a2 = window.getComputedStyle(blocks[1], null).getPropertyValue("background-color");
  const a3 = window.getComputedStyle(blocks[2], null).getPropertyValue("background-color");
  
  const b1 = window.getComputedStyle(blocks[3], null).getPropertyValue("background-color");
  const b2 = window.getComputedStyle(blocks[4], null).getPropertyValue("background-color");
  const b3 = window.getComputedStyle(blocks[5], null).getPropertyValue("background-color");
  
  const c1 = window.getComputedStyle(blocks[6], null).getPropertyValue("background-color");
  const c2 = window.getComputedStyle(blocks[7], null).getPropertyValue("background-color");
  const c3 = window.getComputedStyle(blocks[8], null).getPropertyValue("background-color");
  

  if (((a1 === b1 && a1 === c1) || (a1 === a2 && a1 === a3) || (a1 === b2 && a1 === c3)) && a1 !== 'rgba(0, 0, 0, 0)') {
    winner(a1);
  } else if (((b2 === b1 && b2 === b3) || (b2 === a2 && b2 === c2) || (b2 === a3 && b2 === c1)) && b2 !== 'rgba(0, 0, 0, 0)') {
    winner(b2);
  } else if (((c3 === c2 && c3 === c1) || (c3 === a3 && c3 === b3)) && c3 !== 'rgba(0, 0, 0, 0)') {
    winner(c3);
  } 
}

const winner = (winner) => {
  console.log(winner);
}

// transition moviment from one player to another.
const transitionMove = () => {
  const blocks = document.querySelectorAll('.blockCol');
  for(let i = 0; i < blocks.length; i += 1) {
    blocks[i].addEventListener('click',(e) => {
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
      logicWin();
    });
   
  }
}
transitionMove();

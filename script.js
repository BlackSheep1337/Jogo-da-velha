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
  
  const a1 = blocks[0].innerHTML;
  const a2 = blocks[1].innerHTML;
  const a3 = blocks[2].innerHTML;
  
  const b1 = blocks[3].innerHTML;
  const b2 = blocks[4].innerHTML; 
  const b3 = blocks[5].innerHTML;
  
  const c1 = blocks[6].innerHTML;
  const c2 = blocks[7].innerHTML;
  const c3 = blocks[8].innerHTML;
  
  if (((a1 === b1 && a1 === c1) || (a1 === a2 && a1 === a3) || (a1 === b2 && a1 === c3)) && a1 !== '') {
    winner(a1);
  } else if (((b2 === b1 && b2 === b3) || (b2 === a2 && b2 === c2) || (b2 === a3 && b2 === c1)) && b2 !== '') {
    winner(b2);
  } else if (((c3 === c2 && c3 === c1) || (c3 === a3 && c3 === b3)) && c3 !== '') {
    winner(c3);
  } 

}

const winner = (winner) => {
  const result = document.getElementById('result');
  result.innerHTML = `Jogador ${winner} venceu`;
  result.style.display = 'block';
  result.style.paddingTop = '70px';
  setTimeout(() => { location.reload()}, 2500);
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

const restart = () => {
  const button = document.getElementById('restart');
  button.addEventListener('click', () => {
    location.reload();
  })
}
restart();
const blocksWrap = document.getElementById('game-blocks');

const addBlocksRow = () => {
  const row = 3;
  
  for (let i = 0; i < row; i += 1) {
    const blockRow = document.createElement('div');
    blockRow.classList.add('blockRow');
    blocksWrap.appendChild(blockRow);
  }
}
addBlocksRow();

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

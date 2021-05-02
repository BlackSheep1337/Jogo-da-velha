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
  for (let i = 0; i < col; i += 1) {
    for (let j = 0; j < col; j += 1) {
      const blockCol = document.createElement('div');
      blockCol.classList.add('blockCol');
      blocksRow[i].appendChild(blockCol)
    }
  }
 
}
addBlocksCol();

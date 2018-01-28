const inputWall = (inputNum) => {
  for (let i = 0; i <= inputNum.length; i++) {
    for (let j = 1; j <= inputNum[i]; j++) {
      let id = (i + 1).toString() + j;
      let idElement = document.getElementById(id);
      idElement.className = 'wall';
    }
  }
}

const fillWater = (waterArr, wallArr) => {
  for (let i = 0; i <= wallArr.length; i++) {
    for (let j = 1; j <= waterArr[i]; j++) {
      let id = (i + 1).toString() + (wallArr[i] + j);
      let idElement = document.getElementById(id);
      idElement.className = 'water';
    }
  }
}

const setPeak = (peakArr, wallArr) => {
  console.log(peakArr,'kkkkkk')
  let leftWallIdx = peakArr[0];
  let rightWallIdx = peakArr[1];

  for (let i = 1; i <= wallArr[leftWallIdx]; i++) {
    let id = (leftWallIdx + 1).toString() + i;
    let idElement = document.getElementById(id);
    idElement.className = 'peak';
  }

  for (let i = 1; i <= wallArr[rightWallIdx]; i++) {
    let id = (rightWallIdx + 1).toString() + i;
    let idElement = document.getElementById(id);
    idElement.className = 'peak';
  }
}

module.exports = {inputWall, fillWater, setPeak}

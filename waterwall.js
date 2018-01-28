const findWaterWall = (walls) => {
  let result = {nowater: [0, 0, 0]};
  //keep track of largest volume
  let largest = 'nowater';
  
  walls.forEach((wall, idx) => {
    let left = [wall, null];
    let right = [wall, null];
    
    //find left wall
    let leftWall = walls.slice(0, idx+1);
    for(let i = leftWall.length - 1; i >= 0; i--) {
      if (left[0] < leftWall[i] && 
         (leftWall[i - 1] === undefined || leftWall[i - 1] < leftWall[i])) { 
        left = [leftWall[i], i];
        break;
      }
    }
    //find right wall
    let rightWall = walls.slice(idx+1);
    for(let i = 0; i < rightWall.length; i++) {
      if (right[0] < rightWall[i] &&  
         (rightWall[i + 1] === undefined || rightWall[i + 1] < rightWall[i])) { 
        right = [rightWall[i], i + idx + 1];
        break;
      }
    }
    
   
    
    //get current wall water volume
    let vol = Math.min(left[0], right[0]) - wall;
    
    //save wall index with water volume
    if (left[1] !== null && right[1] !== null) {
      let key = left[1].toString() + right[1].toString();
      //if wall exist, add water volume, if not, save wall and the volume
      if (result[key]) {
        result[key] = [left[1], right[1], result[key][2] + vol];
        
        if (largest) {
          if (result[key][2] > result[largest][2]) {largest = key}
        } else {
          largest = key
        }
        
      } else {
        result[key] = [left[1], right[1], vol];
      }
    }
  })
  
  return result[largest];
}

  module.exports = findWaterWall;
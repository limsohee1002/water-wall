const router = require('express').Router();
const waterwall = require('./util/waterwall.js');

router.post('/submit', (req, res) => {
  let result = {};
  let inputStr = JSON.parse(req.body.input);
  let inputArr = inputStr.split(", ")
                         .map((numStr) =>  parseInt(numStr))
  result.water = waterwall.findAllWater(inputArr);
  result.waterWall = waterwall.findWaterWall(inputArr);
  res.send(result);
})

module.exports = router;
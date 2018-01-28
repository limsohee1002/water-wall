const router = require('express').Router();

router.post('/submit', (req, res) => {
    console.log('>>>susu', req.body.input)
})

module.exports = router;
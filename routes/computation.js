var express = require('express');
var router = express.Router();
let x=Math.floor(Math.random());
let y
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined){
        x=req.query.x;

    }
    let r=Math.cos(x);
    let t=Math.asin(x);
    let n=Math.asinh(x);
    
  res.render('computation', { x:x,cos:r, asin:t, asinh:n});
});

module.exports = router;
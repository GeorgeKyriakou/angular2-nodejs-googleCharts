
const express = require('express');
const router = express.Router();
const camIp = "::ffff:192.168.20.246";
const home = "::1";
var arr= new Array();
var x=0;


router.get('/log',(req,res,next) =>{
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var date = new Date().toJSON();
  if (ip === camIp || ip === home) {
    arr[x] = date;
    x++;
  }

  res.json(arr);
});

router.post('/getlogs', (req, res, next)=>{
  const start = req.body.start;
  const end = req.body.end;
  var selected = new Array();
  var i;
  var y=0;

  if(start && end){
    for(i=0; i<arr.length;i++){
      if(parseInt(arr[i].substring(11, 13)) >= parseInt(start.substring(0,2)) &&
         parseInt(arr[i].substring(11, 13)) <= parseInt(end.substring(0,2))){
        selected[y] = arr[i];
        y++;
      }
    }
    console.log('Are selected '+selected.length+', in range: '+start+ ' to '+end);
      res.json(selected);
    }
    if(!start && !end){
        res.json(arr);
      }

});

module.exports = router;

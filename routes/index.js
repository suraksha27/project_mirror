var express = require('express');
var router = express.Router();
const ytSearch=require("yt-search")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/search',async(request,response)=>{
  console.log(request.query)
  const {yt}=request.query
  try{
      const {videos}=await ytSearch(yt)
      const {videoId,title}=videos[0]
      response.send({videoId,title})
  }catch(error){
      response.send({error:'Could not find the video'})
  }
})

module.exports = router;

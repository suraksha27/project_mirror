const express=require('express')
const cors=require('cors')
const app=express()
const ytSearch=require("yt-search")
app.use(express.json())
app.use(cors())

app.get('/search',async(request,response)=>{
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


app.listen(3001,()=>{
    console.log('Server is running at port 3001')
})
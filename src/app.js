const express=require('express')
const path=require('path')
const hbs=require('hbs')
const getLocation=require('./ultis/geoLocation')
const getWeather=require('./ultis/getWeather')
require('dotenv').config()

const port=process.env.PORT||3000

const app=express()
app.use(express.json())
 app.use(express.static(path.join(__dirname,"../public")))
 hbs.registerPartials(path.join(__dirname,'../templates/partials'))
 app.set('view engine','hbs')
 app.set('views',path.join(__dirname,'../templates/views'))
 
 app.get('',(req,res)=>{
     res.render('home',{
         title:'Home Page',
         name:'Quan Phung'
     })
 })
 app.get('/home',(req,res)=>{
    res.render('home',{
        title:'Home Page',
        name:'Quan Phung'
    })
})
 app.get('/weather', (req,res)=>{
    res.render('weather',{
        title:'Weather',
        name:'Quan Phung'
 })
})
 app.get('/weather/search',async (req,res)=>{
     
     if(!req.query.addr)
     {
         throw new Error('Error')
     }
    try{
        const addr=req.query.addr
        const coords=await getLocation(addr)
    
        const {temper,status,windSpeed} =await getWeather(coords.lat,coords.long)
      
        res.send({temper,status,windSpeed,addr}) 
    }
    catch(e){
        console.log(e.message)
    }
 })

 app.post('/weather',(req,res)=>{
    console.log(req.body)
    res.send({success:'ok',
body:req.body})
 }) 
 app.get('/about',(req,res)=>{
    res.render('about',
        {
            title:'About Me',
            name:'Quan Phung'
        }
    )
})
app.post('/weather',(req,res)=>{
    console.log(req.body)
    res.send(req.body)})

app.get('/help',(req,res)=>{
   res.render('help',{
    title:'Help Page',
    message:'You need help?',
    name:'Quan Phung'
})
})
app.listen(port,()=>{
    console.log('Serve up ')
})
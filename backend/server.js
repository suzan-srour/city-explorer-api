require('dotenv').config();
const express = require('express') ; // import express frame
const cors = require('cors');
const server =express();
const WethData = require('./assets/weather.json')
server.use(cors());
const PORT = process.env.PORT;
// http://localhost:3000/
server.get('/',(req,res)=>{
    res.send( "Hi from home rout");
})

//http://localhost:3000/test
server.get('/test',(req,res)=>{
res.send ('hi from the router');
})

//http://localhost:3000/getWeather 
server.get('/getWeather',(req,res)=>{
let WeatherInf=WethData.results.map( (item)=>{
    return item.lat,item.log;   
})
res.send(WeatherInf); 
})

// http://localhost:3000/getWeather?name=cityName
server.get('/getPockData',(req,res) => {
    console.log(req.query.name);
    const result = pockData.results.find((item)=>{
       if(item.name == req.query.name)
       {
           return item;
       }
    })
   //  console.log(result);
    res.send(result);
   })
   
   server.get('*', (req,res)=>{
       res.send("page not found");
   })





server.listen(PORT,()=> {
console.log ('hELLO,im  in ${PORT} ' );

})
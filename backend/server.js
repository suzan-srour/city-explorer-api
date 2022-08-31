'use strict';

const express = require('express') ; // import express frame
const server =express();

const cors = require('cors');
server.use(cors());

require('dotenv').config();
const axios =require('axios'); 

const PORT = process.env.PORT;

server.listen(PORT,(req,res)=>{
console.log(`Im listing on port ${PORT}`)
})




// http://localhost:3001/
server.get('/',(req,res)=>{
    res.send( "Hi from home rout");
})



 //http://localhost:3000/getWeather 
server.get('/getWeather',(req,res)=>{
let WeatherInf=WethData.results.map( (item)=>{
    return item.name,item.lat,item.log;   
})
// res.send(WeatherInf); 
// })

// // http://localhost:3000/getWeather?name=cityName
 server.get('/getWethkData',getWethHandler);
    function getWethHandler(req,res){
        const searchQ=req.query.searchQuery;
        console.log('hi from the other side')
    }

   res.send(result);
   })
   

//http://localhost:3000/weather?lat=lat&lon=lon&name=cityName
server.get("/weather", (req, res) => {
    let lat = req.query.lat;
    let lon = req.query.lon;
    let cityName = req.query.name;
    console.log(lat, lon, cityName);
  
    let data = allData.find((item) => {
      console.log(
        (item.lat === lat) & (item.lon === lon) & (item.city_name === cityName)
      );
  



   server.get('*', (req,res)=>{
       res.send("page not found");
   })

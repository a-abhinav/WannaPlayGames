const { timeStamp } = require("console");
const express=require("express");
const https=require("https");
const bodyParser=require("body-parser")

const app=express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    
    const city=req.body.cityName;
    const unit="metric";
    const apiKey="4ec6dbcd8c1e7c7715d613f537531cf6";
    const url="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ apiKey +"&units="+unit;
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData= JSON.parse(data);
            const temp=weatherData.main.temp;
            const description=weatherData.weather[0].description;
            const icon= weatherData.weather[0].icon;
            const imgURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";

            res.write("<h1>The temperature in "+city+" is "+temp+" degrees Celcius.</h1>");
            res.write("<h3>The weather is currently "+description+".</h3>");
            res.write("<img src="+imgURL+">");
            res.send();
        });

    });

});

app.listen(3000,function(){
    console.log("Server is running on port:3000");
});













// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 4ec6dbcd8c1e7c7715d613f537531cf6
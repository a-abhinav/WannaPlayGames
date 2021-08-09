//jshint esversion:6

const express = require("express");
const app=express();
const bodyparser=require("body-parser");
const request = require("request");
const https=require("https");

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
})

app.post("/",function(req,res){
    const firstName=req.body.fname;
    const lastName=req.body.lname;
    const email=req.body.email;
    
    const data={
        members: [
            {
                email_address:email,
                status: "subscribed",
                merge_fields: {
                    FNAME:firstName,
                    LNAME: lastName,
                }
            }
        ]
    };

    const jsonData=JSON.stringify(data);

    const url="https://us6.api.mailchimp.com/3.0/lists/86a25fab3a";
   
    const options ={
        method:"POST",
        auth: "salvatore:d74191a74f59b9a6b5c0b00341a60c92-us6",
    }

    const request = https.request(url,options,function(response){

        if(response.statusCode===200){
            res.sendFile(__dirname+"/success.html");
        }else{
            res.sendFile(__dirname+"/failure.html");
        }


        response.on("data",function(data){
             console.log(JSON.parse(data));
        });
    });
    

    request.write(jsonData);
    request.end();                
});

app.post("/failure",function(req,res){
    res.redirect("/");
});

app.listen(process.env.PORT||3000, function(){
    console.log("server is running at port: 3000");
})



// d74191a74f59b9a6b5c0b00341a60c92-us6
// 86a25fab3a
// https://us6.api.mailchimp.com/3.0/lists/86a25fab3a
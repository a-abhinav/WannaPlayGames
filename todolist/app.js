const express = require("express");
const bodyparser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

const items = ['Sun Bath' ,'Read Book'];
const workItems=[];

app.get("/",function(req,res){
    
    const day= date.getDate();

    res.render("list",{listTitle: day,newItems:items});


});

app.get("/work",function(req,res){


    res.render("list",{listTitle:"Work List",newItems:workItems});


});

app.post("/",function(req,res){
    
    const item=req.body.newItem;

    if(req.body.list === 'Work'){
        workItems.push(item);
        res.redirect('/work');
    }else{
        items.push(item);
        res.redirect('/'); 
    }
});

app.post("/work",function(req,res){
    
    const item=req.body.newItem;
    workItems.push(item);
    res.redirect('/work');
})







app.listen(3000, function(){
    console.log("server is running at port: 3000");
})
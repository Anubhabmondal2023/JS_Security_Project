
var express=require("express");

var app=express();
app.get('/',function(req,resp){
    resp.send("welcome to the Rest API")
});

app.get('/time',function(req,resp){
    var time=new Date().toLocaleTimeString();
    resp.send(`Time is: ${time}`);
});

app.get('/date',function(req,resp){
    var date=new Date().toLocaleDateString();
    resp.send(`Date is: ${date}`);
})

app.listen(9001,()=>console.log("API Started Listening...."))
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/bmi",function(req,res){
    const a=Number(req.body.aa);
    const b=Number(req.body.bb);
    const c=a/(b*b);
    res.send("Your BMI is "+c);
})
app.listen(3000,function(){
    console.log("kk");
});
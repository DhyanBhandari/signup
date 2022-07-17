const express = require("express");
const bodyparser = require("body-parser");
const request  = require("request");
const https = require("https");


const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname +  "/signup.html");
});
app.post("/",function(req,res){
const firstname = req.body.fname;
const secondname = req.body.lname;
const emailId = req.body.email;
const data = {
    members:[
      {
        email_address: emailId,
        status: "subscribed",
        merge_fields:{
          FNAME: firstname,
         LNAME: secondname
        }

      }
    ]
  };

const jsonData = JSON.stringify(data);
const url = "https://us8.api.mailchimp.com/3.0/lists/e574b71bd1";
const options = {
  method:"POST",
  auth:"dhyan:812110aade6e9550621042d502118435-us8"
}


const request = https.request(url,options,function(response){
if (response.statusCode === 200){
  res.sendFile(__dirname + "/success.html");
}else{
  res.sendFile(__dirname + "/failure.html");
}

  response.on("data",function(data){
    console.log(JSON.parse(data));
  })

})
request.write(jsonData);
request.end();
});



app.post("/failure",function(req,res){
  res.redirect("/");
});







app.listen(process.env.PORT  || 3000,function(){
  console.log("serrver is running on port 3000");
});
//api key
//812110aade6e9550621042d502118435-us8


//audience id
//

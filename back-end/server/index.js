const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//Section 2 middleWares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//Section 3 Requests
app.get('/' , (req,res) => {
    res.send("<h1>Home Page </h1>");
});

app.post('/Login' , (req ,res) => {
        let post_body = req.body    ;
        console.log(post_body);

})  


app.listen(8080 , () =>{
    console.log("server started")
})
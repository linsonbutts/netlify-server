const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express()

let port = process.env.PORT || 8080
let buildingCode = "WDF";

app.get('/nearest',cors(),function(req,res){
    if(buildingCode == 'WDF'){
        res.send('WDF')
    }
    else{
        res.send('ARN')
    }
})
app.post('/nearest',cors(),function(req,res){
        console.log("this is the req.body"+req.body)
        if(req.body.ButtonPressA == 1){
            buildingCode = 'ARN'
            console.log(req.body)
            res.send('ARN')
        }
        if(req.body.ButtonPressB == 1){
            buildingCode = 'WDF'
            console.log(req.body)
            res.send('WDF')
        }
        
    })
app.use(express.json())

app.use(cors())

app.listen(port,()=>{
    console.log('Listening at port: '+port);
})
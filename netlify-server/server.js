const express = require('express');
const cors = require('cors')

console.log("hi")

const app = express()

let port = process.env.PORT || 8080
let buildingCode = "WDF";

app.get('/nearest',function(req,res){
    if(buildingCode == 'WDF'){
        res.send('WDF')
    }
    else{
        res.send('ARN')
    }
})
app.post('/nearest',function(req,res){
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
    app.use(cors())
    
app.listen(port,()=>{
    console.log('Listening at port: '+port);
})
const express = require('express');
const serverless = require('serverless-http')
const app = express()

const router = express.Router();
app.use(express.json());


app.use(express.urlencoded({
  extended: true
}));

let buildingCode = "WDF";

router.get('/nearest',function(req,res){
    if(buildingCode == 'WDF'){
        res.send('WDF')
    }
    else{
        res.send('ARN')
    }
})
router.post('/nearest',function(req,res){
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

    app.use('/.netlify/functions/server',router)
    module.exports.handler = serverless(app)
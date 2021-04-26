const express = require('express');
const serverless = require('serverless-http')
const cors = require('cors');
const app = express()

const router = express.Router();
app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://mystifying-jennings-b51abd.netlify.app/"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
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
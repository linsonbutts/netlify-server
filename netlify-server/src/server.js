const express = require('express');
const cors = require('cors')
const serverless = require('serverless-http')

const app = express()

const router = express.Router();
app.use(express.json());
var corsOptions = {
    origin: 'https://mystifying-jennings-b51abd.netlify.app/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))


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
const express = require('express');
const serverless = require('serverless-http')
const cors = require('cors');
const app = express()

const router = express.Router();
app.use(express.json());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.use(express.urlencoded({
  extended: true
}));


let buildingCode = "WDF";

router.get('/nearest', cors(corsOptions), function(req,res){
    if(buildingCode == 'WDF'){
        res.send('WDF')
    }
    else{
        res.send('ARN')
    }
})
router.post('/nearest',cors(corsOption),function(req,res){
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
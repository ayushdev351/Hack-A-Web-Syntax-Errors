const express = require('express');
const router = express.Router();
const path = require('path');
const data = require('./samplefinal.json');


router.post('/', (req, res) => {
    let bodyData = req.body[0].symptoms;
    bodyData = bodyData.replaceAll('[', '');
    bodyData = bodyData.replaceAll(']', '');
    bodyData = bodyData.replaceAll(',', '');
    bodyData = bodyData.replaceAll('\'', '');
    bodyData = bodyData.split(' ');   
    let myarray = bodyData;
    console.log(myarray);
    var max = 0;
    var disease = "NoMatch";
    var resarray = [];
    for(let i in data)
    {
        let common = data[i].filter(x => myarray.indexOf(x) !== -1);
        if(common.length == max) {
            resarray.push(i);
        }
        else if(common.length>max)
        {
            resarray.splice(0,resarray.length);
            resarray.push(i);
            max = common.length;
        }
    }
    if(resarray.length>1)setTimeout(()=>res.send("Your have high chances of following " + resarray+ "\nIf you want more precision then enter more symptoms"), 2000);
    else if(resarray.length==0)setTimeout(()=>res.send("No match found"), 2000);
    else setTimeout(()=>res.send("Symptoms match with " + resarray), 2000);
    setTimeout(()=>console.log(disease), 2000);
});

module.exports = router;
const express = require('express')
const surveys = require('./surveys').surveys;
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

//CORS - Cross Origin (website name, by us localhost:xxxx) Resource Sharing
//Access to fetch at 'http://localhost:3000/api/surveys' from origin 'http://localhost:3500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

app.get('/api/surveys', (req, res) => {
    res.send(surveys)
})

app.get('/api/surveys/:code', (req, res) => {
    console.log(req.params);
    let singleSurvey = surveys.find(s => s.code == req.params.code)
    console.log(singleSurvey);
    res.send(singleSurvey)
})

app.post('/api/surveys', (req, res) => {
    // console.log(req);
    // console.log(req.body);
    let newSurvey = { ...req.body };
    let currentMax = Math.max(...surveys.map(o => o.code));
    newSurvey.code = ++currentMax;
    surveys.push(newSurvey);
    res.send(newSurvey);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
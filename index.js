const express = require('express');

const app = express();

const port = 3000;

let requestCount = 0;

function requestIncresers(req,res, next) {
    requestCount = requestCount + 1;
    console.log("Total no of requests: " + requestCount);
    next();
};
function realSumHandler (req, res) {
    // This is the main logic
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        "print": "success",
        sum: a + b
    });
};


app.use(requestIncresers);

//  better routing , add database, middlewares
app.get('/sum', realSumHandler); 

app.get('/multiply', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        "massage": "success",
        multiply: a * b
    });
})

app.get('/subtract', (req, res) => {
    requestIncresers(req,res);
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        "massage": "success",
        "subtract": a - b
    });
})

app.get('/divide',  (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        "massage": "success",
        divide: a / b
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/sum', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        "print": "success",
        sum: a + b
    });
})

app.get('/multiply', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        "massage": "success",
        multiply: a * b
    });
})

app.get('/subtract', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        "massage": "success",
        "subtract": a - b
    });
})

app.get('/divide', (req, res) => {
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
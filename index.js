const express = require("express");
const app = express();
const bodyParsers = require("body-parser");

//In express , If you want to send JSON data,
// you need to first parse the JSON data.

app.use(bodyParsers.json());

app.post("/sum", function(req, res) {
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans: a + b
    })
});

app.listen(3000);
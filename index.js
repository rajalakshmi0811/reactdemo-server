const express = require("express");
const bodyParser = require ('body-parser');
const cors = require ('cors');
const app = express();

const PORT = process.env.PORT || 9001;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.post('/calculate', (req, res) => {
    const { operand1, operand2, operator} = req.body;
    let result = 0;

    if(operator === "add"){
        result = operand1 + operand2;
    }
    else if(operator === "sub"){
        result = operand1 - operand2;
    }
    else if(operator === "multi"){
        result = operand1 * operand2;
    }
    else if(operator === "div"){
        result = operand1 / operand2;
    }

    res.json({
        result
    });
});


app.get("/home", (req,res) => {
    res.send("Home Page");
});

// app.get("/info", (req,res) => {
//     res.send("Made by Rajalakshmi Raja");
// })


app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
});
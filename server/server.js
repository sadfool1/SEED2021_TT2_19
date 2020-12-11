const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();

const db = require("./models");

db.sequelize.sync()

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

//Invclude routes here


app.get("/", (req, res) => {
    res.send("Express connection success")
});

app.get('/api/transfer', (req, res) =>{
    axios.post('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login',{
        data: {
            "username": "Group19",     
            "password": "SJGsiXX1LfFPyWM" 
        },
        headers: {
            'x-api-key': '1pigYzAdHBepN1i5E1ga2Jdug12i4Mu3Ph8PYp15' 
        }
    })
    .then((response) => {
        res.json(response.data)
    })
    .catch((error) => {
        console.error(error)
    })
});

app.get('/login', (req, res) => {
    axios.get('https://reqres.in/api/login', {
        data: req.body,
        headers: {
            "token": "QpwL5tke4Pnpja7X4"
            }
        })
        .then((response) => {
            res.json(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
});
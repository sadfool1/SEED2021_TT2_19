const { verifySignUp } = require("../middleware");
const controller = require("../controller/auth.controller.js");
const axios = require("axios");

module.exports = function(app) {
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/api/homepage', (req, res) => {
        var data = JSON.stringify({"custID":19});

        var config = {
        method: 'post',
        url: 'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view',
        headers: { 
            'x-api-key': '1pigYzAdHBepN1i5E1ga2Jdug12i4Mu3Ph8PYp15', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            res.status(200).send({
                accountName: response.data[1].accountName,
                availableBal: response.data[1].availableBal,
                accountNumber: response.data[1].accountNumber,
                name: "KayleyHerzog",
                username: "kayley-herzog"
                });
            res.json(response.data[1]);
            //console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    });

    app.post("/api/jwt/homepage", (req, res) => {

        let token = req.headers["x-acccess-token"];
        if(!token){
            return res.status(403).send({
                message: "ERROR: JWT not found"
            });
        }
    
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "ERROR: JWT unathorized"
                })
            }
            else {
                //res.json(decoded.id);
            }
    
        });

        var data = JSON.stringify({"custID":19});

        var config = {
        method: 'post',
        url: 'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view',
        headers: { 
            'x-api-key': '1pigYzAdHBepN1i5E1ga2Jdug12i4Mu3Ph8PYp15', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            res.status(200).send({
                accountName: response.data[1].accountName,
                availableBal: response.data[1].availableBal,
                accountNumber: response.data[1].accountNumber,
                name: "KayleyHerzog",
                username: "kayley-herzog"
                });
            res.json(response.data[1]);
            //console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
        
    });


    app.get("/api/homepage", (req, res) => {

        var data = JSON.stringify({"custID":19});

        var config = {
        method: 'post',
        url: 'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view',
        headers: { 
            'x-api-key': '1pigYzAdHBepN1i5E1ga2Jdug12i4Mu3Ph8PYp15', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            res.status(200).send({
                accountName: response.data[1].accountName,
                availableBal: response.data[1].availableBal,
                accountNumber: response.data[1].accountNumber,
                name: "Kaylee Herzog",
                username: "kaylee-herzog"
                });
            //res.json(response.data[1]);
            //console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
        
    });
};
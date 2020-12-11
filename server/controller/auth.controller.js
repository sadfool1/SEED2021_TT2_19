const db = require("../models");
const config = require("../config/auth.config.js");
const User = db.user;
const Role = db.role;

const Op = db.sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(user => {
        if (!user){
            return res.status(404).send({
                message: "ERROR: Cannot find user."
            })
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "ERROR! Invalid password."
            });
        }

        var token = jwt.sign({id: user.id}, config.secret, {
            expiresIn: 7200 // 2 hours, change expiry time here
        });

        res.status(200).send({
        username: user.username,
        email: user.email,
        accessToken: token
        });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};
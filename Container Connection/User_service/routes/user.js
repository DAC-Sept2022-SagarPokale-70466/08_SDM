const express = require('express')

const crptoJs = require('crypto-js')

const db = require('../db');

const { MD5 } = require('crypto-js');

const utils = require('../utils')

const router = express.Router();

router.post('/signup', (request, responce) => {
    const { firstname, lastname, email, password } = request.body;

    const encryptedPassword = String(crptoJs.MD5(password))
    const quary = `insert into users (firstname, lastname, email, password) values(?,?,?,?)`

    db.pool.execute(quary, [firstname, lastname, email, encryptedPassword], (error, result) => {
        responce.send(utils.createResult(error, result))
    })
})


router.post('/singin', (request, responce) => {
    const { email, password } = request.body;

    const encryptedPassword = String(crptoJs.MD5(password))
    const quary = `select id, firstname, lastname from users where email = ? and password = ?`

    db.pool.execute(quary,
        [email, encryptedPassword],
        (error, users) => {
            if (error) {
                responce.send(utils.createErrorResult(error))
            }
            else if (users.lastname == 0) {
                responce.send(utils.createErrorResult('users does not exist'))
            }
            else {
                responce.send(utils.createSuccessResult(users[0]))
            }

        })
})

module.exports = router
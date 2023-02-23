const express = require('express');
const cors = require('cors');
const { request } = require('express');

const app = express();

app.use(cors('*'))

app.use(express.json())

app.get('/',(request, responce) =>
{
    responce.send("Running inside the container ")
})

app.listen(3000,'0.0.0.0',() =>
{
    console.log('server running on port 3000')
})
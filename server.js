const express = require('express');
const app = express();

app.use(express.static("public"))

const http = require('http').Server(app)


const porta = process.env.PORT || 3000

const host = process.env.HEROKU_APP_NAME ? `https://${process.env.HEROKU_APP_NAME}.herokuapp.com` : "http://localhost"

http.listen(porta, function() {
    const portaStr = porta === 80 ? '' : ':' + porta

    if (process.env.HEROKU_APP_NAME)
        console.log('Servidor iniciado. Abra o navegador em ' + host)
    else
        console.log('Servidor iniciado. Abra o naegador em ' + host + portaStr)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html')
})

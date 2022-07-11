const express = require('express')
const app = express()
const port = 4000

const Line = require('./line');
const myLine = new Line();

// LINE Notify トークンセット
myLine.setToken('jJjUsljDw4b9hmnL4Yz4IJSS0WAECbCL8pX7pz7UKdN');
// LINE Notify 実行（「こんにちは！」とメッセージを送る）
myLine.notify('こんにちは');

const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, access_token'
    )

    if ('OPTIONS' === req.method) {
        res.send(200)
    } else {
        next()
    }
}

app.use(allowCrossDomain)


app.get("/", (req, res) => { 
    console.log(req.query.money)
    // myLine.notify('こんにちは');
    // res.json(200)
})




let i = 0;
app.post("/", (req, res) => {
    console.log(req.body)
    i++;
    console.log(i);
    console.log("post");
})

app.listen(port, () => console.log(`http://localhost:${port}/`))
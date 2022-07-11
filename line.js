const axios = require("axios");
const express = require('express')
const app = express()
const port = 4000
const qs = require("querystring");
const BASE_URL = "https://notify-api.line.me";
const PATH = "/api/notify";
const LINE_TOKEN = `jJjUsljDw4b9hmnL4Yz4IJSS0WAECbCL8pX7pz7UKdN`;

const config = {
    baseURL: BASE_URL,
    url: PATH,
    method: "post",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${LINE_TOKEN}`
    },
    data: qs.stringify({
        message: `今月の支払いは56000円です。`
    })
};

//エラーハンドリングしっかりする
app.get("/", async (req, res) => {
    const response = await axios.request(config);
    console.log(response.data.status);
    ret = response.data.status
    if (ret === 200){
        res.json(response.data.status);
    }
});

app.listen(port, () => console.log(`http://localhost:${port}/`))
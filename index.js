
const express = require("express")
const http = require("http")
const app = express()

const key = '389b1049e54c0c3d8be334d9d7ed3ea6'
const lat = '51.5072'; const lon = '0.1276'

const opts = {
    host: 'api.openweathermap.org',
    path: `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
}

const data = http.get(opts, (res) => {

    let data = ''

    res.on("data", (d) => {
        data += d
        console.log(d.toString())
    })



    // console.log(data)
    // console.log(JSON.stringify(res.body))
})


module.exports = {
    data,
}
// const PORT = process.env.PORT || 2310
// app.listen(PORT, () => console.log("i"))
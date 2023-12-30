const fs = require('fs')

let data = JSON.parse(fs.readFileSync("1-json.json").toString())

data.name = "Raphael"
data.age = 19

const dataJSON = JSON.stringify(data)
fs.writeFileSync("1-json.json", dataJSON)
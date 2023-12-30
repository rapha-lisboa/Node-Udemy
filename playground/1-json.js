const fs = require('fs')

const book = {
    title: "Harry Potter",
    author: "J. K. Rowling"
}

const json = JSON.stringify(book)
fs.writeFileSync("1-json.json", json)

const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = dataBuffer.toString
const dataObject = JSON.parse(dataJSON)

console.log(dataObject.author)
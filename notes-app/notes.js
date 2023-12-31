const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return "Your notes..."
}

const addNotes = function (title, body) {
    const notes = loadNotes()
    const duplicatedTitles = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicatedTitles.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log(chalk.green.bold("Note added, successfully!"))
    } else {
        console.log(chalk.red.bold("Error! Note title already exists"))
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        console.log("databuffer = " + dataBuffer)
        const dataJSON = dataBuffer.toString()
        console.log("dataJSON = " + dataJSON)
        const data = JSON.parse(dataJSON)
        
        return data
    }  catch (e) {
        return []
    }
 }

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
}
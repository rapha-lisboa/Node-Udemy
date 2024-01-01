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

const removeNotes = function (title) {
    const notes = loadNotes()
    console.log("notes = ", notes)
    
    const newNotes = notes.filter(function (note) {
        return note.title != title
    })
    
    console.log("newNotes = ", newNotes)

    if(JSON.stringify(newNotes) !== JSON.stringify(notes)){
        saveNotes(newNotes)
        console.log(chalk.green.bold("Note removed, successfully!"))
    } else {
        console.log(chalk.red.bold("Error! Note title not founded"))
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    console.log("Jeison = ", dataJSON)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        
        return data
    }  catch (e) {
        return []
    }
 }

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}
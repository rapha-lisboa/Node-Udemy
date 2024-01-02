const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => "Your notes..."

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicatedTitles = notes.filter((note) => note.title === title)

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

const removeNotes = (title) => {
    const notes = loadNotes()
    
    const newNotes = notes.filter((note) => note.title != title)

    if(JSON.stringify(newNotes) !== JSON.stringify(notes)){
        saveNotes(newNotes)
        console.log(chalk.green.bold("Note removed, successfully!"))
    } else {
        console.log(chalk.red.bold("Error! Note title not founded"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    let noteCount = 1

    console.log(chalk.bold("Your Notes"))

    notes.forEach((note) => {
        console.log(noteCount + ": " + note.title)
        noteCount++
    });
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
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
    removeNotes: removeNotes,
    listNotes: listNotes
}
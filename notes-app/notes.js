const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => "Your notes..."

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicatedTitle = notes.find((note) => note.title === title)

    if (!duplicatedTitle) {
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

    console.log(chalk.blue.bold("Your Notes"))

    notes.forEach((note) => {
        console.log(chalk.blue.bold(noteCount + ": ") + note.title)
        noteCount++
    });
}

const readNotes = (title) => {
    const notes = loadNotes()

    const noteWanted = notes.find((note) => note.title === title)

    if(noteWanted){

        console.log(chalk.blue.bold("Title:"), noteWanted.title)
        console.log(chalk.blue.bold("Body:"), noteWanted.body)
    } else {
        console.log(chalk.red.bold("Error! Note not founded"))
    }
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
    listNotes: listNotes,
    readNotes: readNotes
}
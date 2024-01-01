const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Insert a note title',
            demandOption: true,
            type: 'string',
        },

        body: {
            describe: 'Insert a body',
            type: 'string',
            demandOption: true,
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove an existing note',
    builder: {
        title: {
            describe: 'Insert an exist note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log("Reading the note")
    }
})

yargs.command({
    command: 'list',
    describe: 'List the elements of a note',
    handler: function () {
        console.log("Listing the elements of the note")
    }
})

yargs.parse()
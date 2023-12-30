const val = require('validator')
const chalk = require('chalk')


const command = process.argv[2]

if (command === "add"){
    console.log(chalk.green.bold("Success!"))
    console.log("I'm adding a note")
} else if (command ===  "remove") {
    console.log(chalk.red.bold("Error!"))
    console.log("I'm removing a note")
}
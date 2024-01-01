// const square = function (x) {
//     return x**2
// }

// const square = (x) => {
//     return x**2
// }

// const square = (x) => x**2

const event = {
    name: 'Birthday Party',
    guessList: ['Raphinha', 'Sartori', 'Erico'],
    printGuestList() {
        console.log('This event is a ' + this.name)
        this.guessList.forEach((guest) => {
            console.log(guest, 'is invited for the', this.name)
        })
    }
}

event.printGuestList()
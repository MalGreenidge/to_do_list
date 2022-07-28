// Below is the basic logic for the TO DO APP -  I Will continue to update and optimize overtime. Sooner rather than later!


// Empty array to store List Items
let userList = [];
let userChoice = prompt('What would you like to do? '); //Ask user for input

// Function that adds new Item to array
const addNew = (arr) => {
    let newItem = prompt('Add New Item to List: ');
    arr.push(newItem);
};

// Function logging items in array to console
const list = (arr) => {
    for (const item of arr) {
        let itemNum = arr.indexOf(item);
        console.log(`${itemNum}: ${item}`);
    };
}

// Function Removes item from array based on index position
const remove = (arr) => {
    let index = prompt('What number do you want to remove? ');
    arr.splice(index);
}

// While loop that continues to run program based on Use Input
while (userChoice !== 'quit') {
    if (userChoice === 'new') {
        addNew(userList);
        userChoice = prompt('What would you like to do? ')
    } else if (userChoice === 'list') { 
        list(userList);
        userChoice = prompt('What would you like to do? ')
    } else if (userChoice === 'delete') {
        remove(userList);
        userChoice = prompt('What would you like to do? ');
    }
}


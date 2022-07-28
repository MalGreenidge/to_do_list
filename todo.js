let userList = [];
let userChoice = prompt('What would you like to do? ');


const addNew = (arr) => {
    let newItem = prompt('Add New Item to List: ');
    arr.push(newItem);
};

const list = (arr) => {
    for (const item of arr) {
        let itemNum = arr.indexOf(item);
        console.log(`${itemNum}: ${item}`);
    };
}

const remove = (arr) => {
    let index = prompt('What number do you want to remove? ');
    arr.splice(index);
}

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


//
function creatMessage(name) {
    if (name) {
        return "Hello my name is " + name;
    }
    // return undefined 
    return 'Write some name';
}
console.log(creatMessage("Gas"));
console.log(creatMessage(''));

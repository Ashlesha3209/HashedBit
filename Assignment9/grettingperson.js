const person = {
    name: "Ashlesha",
    occupation: "Student"
};

function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}. I am a ${obj.occupation}.`);
}

greetPerson(person);

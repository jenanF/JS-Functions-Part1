
// TASK 1
function printName() {
    console.log("jenan");
}

// TASK 2
function printAge(birthYear) {
    age = 2024 - birthYear;
    console.log(age);
}

// TASK 3
function printAgeAndName(birthYear, name) {
    age = 2024 - birthYear;
    console.log(`Hello ${name} you are ${age} years old`);
}

// TASK 4
function printHello(name, language) {

    if (language == "en") {
        console.log(`Hello ${name}`);
    } else if (language == "es") {
        console.log(`Hola ${name}`);
    } else if (language == "fr") {
        console.log(`Bonjour ${name}`);
    } else if (language == "ts") {
        console.log(`Merhaba ${name}`);
    } else {
        console.log("error: language not identified");
    }
}


// TASK 5
function printMax(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

printName();
printAge(1967);
printAgeAndName(1981, "jenan");
printMax(4, 7);
printHello("jenan", 'en');
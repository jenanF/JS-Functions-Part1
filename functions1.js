
// TASK 1
function printName() {
    console.log("jenan");
}

// TASK 2
function printAge(birth_year) {
    age = 2024 - birth_year;
    console.log(age);
}

// TASK 3
function printAgeAndName(birth_year, name) {
    age = 2024 - birth_year;
    console.log(`Hello ${name} you are ${age} years old`);
}

// TASK 4
function printHello(name, language) {

    if (language == "en") {
        print(`Hello ${name}`)
    } else if (language == "es") {
        print(`Hola ${name}`)
    } else if (language == "fr") {
        print(`Bonjour ${name}`)
    } else if (language == "ts") {
        print(`Merhaba ${name}`)
    } else {
        print("error: language not identified")
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
printHello('en', "jenan")
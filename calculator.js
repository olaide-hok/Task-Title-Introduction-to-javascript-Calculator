// Task Title: Simple CLI Calculator
var prompt = require("prompt-sync")({ sigint: true });
const welcome = () => console.log("Welcome to Calculator");

const calculate = () => {
  let operation = prompt(`
        Please type in the math operation you would like to complete:
        + for addition
        - for subtraction
        * for multiplication
        / for division`
    );

  let num_1 = parseInt(prompt("Please enter the first number: "));
  let num_2 = parseInt(prompt("Please enter the second number: "));

  if (operation == "+") {
    let result = num_1 + num_2;
    console.log(`${num_1} + ${num_2} = ${result} `);
  } else if (operation == "-") {
    let result = num_1 - num_2;
    console.log(`${num_1} - ${num_2} = ${result} `);
  } else if (operation == "*") {
    let result = num_1 * num_2;
    console.log(`${num_1} * ${num_2} = ${result} `);
  } else if (operation == "/") {
    let result = num_1 / num_2;
    console.log(`${num_1} / ${num_2} = ${result} `);
  } else {
    console.log(
      `You have not typed a valid operator, please run the program again.`
    );
  }

  // again() function to call the calculate() function again
  again();
};

const again = () => {
  calc_again = prompt(`
        Do you want to calculate again?
        Please type Y for YES or N for NO.`
    );
    if (calc_again.toUpperCase() == "Y") {
        calculate();
    } else if (calc_again.toUpperCase() == "N") {
        console.log("See you later.");
    } else {
        again();
    }
};

// Call calculate() outside of the function
welcome()
calculate();

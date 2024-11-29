let x = prompt("- or + or / or * ?");

if (x === "+") {
    console.log("You chose addition!");
    let number1 = Number(prompt("Enter number1"));
    let number2 = Number(prompt("Enter number2"));
    alert(number1 + number2);
} else if (x === "-") {
    console.log("You chose subtraction!");
    let number1 = Number(prompt("Enter number1"));
    let number2 = Number(prompt("Enter number2"));
    alert(number1 - number2);
} else if (x === "/") {
    console.log("You chose division!");
    let number1 = Number(prompt("Enter number1"));
    let number2 = Number(prompt("Enter number2"));
    alert(number1 / number2);
} else if (x === "*") {
    console.log("You chose multiplication!");
    let number1 = Number(prompt("Enter number1"));
    let number2 = Number(prompt("Enter number2"));
    alert(number1 * number2);
} else {
    console.log("Invalid input.");
}

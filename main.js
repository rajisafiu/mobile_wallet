

let correctPIN = "1234";
let enteredPIN = "";
while (enteredPIN!==correctPIN) {
    enteredPIN = prompt("enter your PIN:")
    if (enteredPIN!==correctPIN) {
        alert("incorrectPIN please try again")
    }
}
alert("access Granted")
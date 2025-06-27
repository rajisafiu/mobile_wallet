// function showPlan() {
//     const day = document.getElementById("dayselect").value;
//     const output = document.getElementById("output");
//     switch (day) {
//         case "January 1st":output.textContent = "New year day 😊"
            
//             break;
//         case "April 25th":output.textContent = "Rsk Birthday 🎂"
            
//             break;
//         case "May 1st":output.textContent = "Workers day 😎"
            
//             break;
//         case "May 29th":output.textContent = "Childrens day 🐱‍👤"
            
//             break;
//         case "June 12th":output.textContent = "Democracy day 🤗"
            
//             break;
//         case "August 29th":output.textContent = "Anikemi Birthday 🌹"
            
//             break;
//         case "October 1st":output.textContent = "Independent Day 🎈"
            
//             break;
//         case "December 25th":output.textContent = "Christmas Day 🎄"
            
//             break;
//         case "December 26th":output.textContent = "Boxing Day 🤷‍♂️"
            
//             break;
    
//         default:
//             break;
//     }
// }





// let choice;
// do {
//   console.log("Main Menu:");
//   console.log("1. Check Balance");
//   console.log("2. Deposit Money");
//   console.log("3. Withdraw Money");
//   console.log("4. Exit");
//   choice = parseInt("enter your choice (1 to 4)");

//   switch (choice) {
//     case 1:console.log("your balance is $1000");
    
//       break;
//     case 2:console.log("enter deposit amount");
//       break;
//     case 3:console.log("enter withdraw amount");
//       break;
//     case 4:console.log("exiting.Thank you for banking with us. do have a nice day");
//       break;

//     default:console.log("invalid choice, please try again");
//       break;
//   } break
// } while (choice!==4);








// Get the form element
// const form = document.querySelector('.login-form');

// // Add an event listener to the form
// form.addEventListener('submit', (e) => {
//     // Prevent the default form submission behavior
//     e.preventDefault();

//     // Get the username and password fields
//     const username = document.getElementById('username');
//     const password = document.getElementById('password');

//     // Check if the username and password fields are empty
//     if (username.value === '' || password.value === '') {
//         alert('Please fill in both username and password fields');
//     } else {
//         // Here you would typically send a request to the server to authenticate the user
//         // For this example, we'll just simulate a successful login
//         alert('Login successful!');
//         // You can redirect the user to the dashboard or home page here
//         // window.location.href = 'dashboard.html';
//     }
// });

// // Add an event listener to the signup link
// const signupLink = document.querySelector('.signup a');
// signupLink.addEventListener('click', (e) => {
//     // Prevent the default link behavior
//     e.preventDefault();
//     // You can redirect the user to the signup page here
//     // window.location.href = 'signup.html';
//     alert('Redirecting to signup page...');
// });

// // Add an event listener to the forgot password link
// const forgotPasswordLink = document.querySelector('.forgot-password a');
// forgotPasswordLink.addEventListener('click', (e) => {
//     // Prevent the default link behavior
//     e.preventDefault();
//     // You can redirect the user to the password reset page here
//     // window.location.href = 'reset-password.html';
//     alert('Redirecting to password reset page...');
// });





// let choice;
// do {
//   console.log("Main Menu:");
//   console.log("1. Check Balance");
//   console.log("2. Deposit Money");
//   console.log("3. Withdraw Money");
//   console.log("4. Exit");
//   choice = parseInt("enter your choice (1 to 4)");

//   switch (choice) {
//     case 1:console.log("your balance is $1000");
    
//       break;
//     case 2:console.log("enter deposit amount");
//       break;
//     case 3:console.log("enter withdraw amount");
//       break;
//     case 4:console.log("exiting.Thank you for banking with us. do have a nice day");
//       break;

//     default:console.log("invalid choice, please try again");
//       break;
//   } break
// } while (choice!==4);








// Get the form element
const form = document.querySelector('.login-form');

// Add an event listener to the form
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the username and password fields
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    let loginAttempts = 0;
    const maxAttempts = 3;

    while (loginAttempts < maxAttempts) {
        if (username.value === '' || password.value === '') {
            alert('Please fill in both username and password fields');
            break;
        } else {
            switch (username.value) {
                case 'rskfashion':
                    if (password.value === 'fashiontech') {
                        alert('Login successful!');
                        // You can redirect the user to the dashboard or home page here
                        window.location.href = 'file:///C:/Users/dell/OneDrive/Desktop/mobile%20wallet/dashboard/dashboard.html';
                        loginAttempts = maxAttempts;
                    } else {
                        alert('Invalid password');
                        loginAttempts++;
                    }
                    break;
                default:
                    alert('Invalid username');
                    loginAttempts++;
                    break;
            }
        }
        if (loginAttempts === maxAttempts) {
            alert('Maximum login attempts reached');
            // You can redirect the user to a page that says they have been locked out
            // window.location.href = 'locked-out.html';
        }
    }
});

// Add an event listener to the signup link
const signupLink = document.querySelector('.signup a');
signupLink.addEventListener('click', (e) => {
    // Prevent the default link behavior
    e.preventDefault();
    let response = prompt('Do you want to sign up? (yes/no)');
    switch (response) {
        case 'yes':
            alert('Redirecting to signup page...');
            // You can redirect the user to the signup page here
            // window.location.href = 'signup.html';
            break;
        case 'no':
            alert('You chose not to sign up');
            break;
        default:
            alert('Invalid response');
            break;
    }
});

// Add an event listener to the forgot password link
const forgotPasswordLink = document.querySelector('.forgot-password a');
forgotPasswordLink.addEventListener('click', (e) => {
    // Prevent the default link behavior
    e.preventDefault();
    let response = prompt('Do you want to reset your password? (yes/no)');
    switch (response) {
        case 'yes':
            alert('Redirecting to password reset page...');
            // You can redirect the user to the password reset page here
            // window.location.href = 'reset-password.html';
            break;
        case 'no':
            alert('You chose not to reset your password');
            break;
        default:
            alert('Invalid response');
            break;
    }
});



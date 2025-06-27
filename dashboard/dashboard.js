function showPlan() {
    const day = document.getElementById("dayselect").value;
    const output = document.getElementById("output");
    switch (day) {
        case "January 1st":output.textContent = "New year day 😊"
            
            break;
        case "April 25th":output.textContent = "Rsk Birthday 🎂"
            
            break;
        case "May 1st":output.textContent = "Workers day 😎"
            
            break;
        case "May 29th":output.textContent = "Childrens day 🐱‍👤"
            
            break;
        case "June 12th":output.textContent = "Democracy day 🤗"
            
            break;
        case "August 29th":output.textContent = "Anikemi Birthday 🌹"
            
            break;
        case "October 1st":output.textContent = "Independent Day 🎈"
            
            break;
        case "December 25th":output.textContent = "Christmas Day 🎄"
            
            break;
        case "December 26th":output.textContent = "Boxing Day 🤷‍♂️"
            
            break;
    
        default:
            break;
    }
}
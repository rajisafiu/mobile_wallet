function dashboard() {
    const wallet = document.getElementById("selectoption").value;
    const output = document.getElementById("output");
    switch (wallet) {
        case "My USD Balance":output.textContent = "$50,000,000,000"
            
            break;
        case "My Naira Balance":output.textContent = "#900,000,000,000"
            
            break;
        case "Transfer":output.textContent = "Make a transfer"
            
            break;
        case "Deposit":output.textContent = "Make a deposit"
            
            break;
    
        default:
            break;
    }
}
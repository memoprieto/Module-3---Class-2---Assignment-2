//declaration of variables
let userName= prompt("Please, enter name of product: ");
let userPrice=prompt("Please, enter price of product: ");

//Calculate the yearly salary
let tax=(userPrice*0.16);

// display on the html the information
document.write(`
    <div>
        <p>Name: ${userName} </p>
        <p>Email: ${userPrice} </p>
        <p>Salary: ${tax} </p>
    </div>
    `); 
// Requesting the prompt syncronization with terminal function from 'prompt-sync' library
const prompt = require('prompt-sync')();

// Setting the code
// Introduction message
console.log(`=================== \nQUADRATIC FUNCTION \n    CALCULATOR \n===================`);

// The main function to run the code
function mainFunction() : void {
    // Defining the variables A, B and C
    let a, b, c;
        // Defining the values of A, B and C using the terminal user values
        a = Number(prompt("Enter a value for A: "));
        b = Number(prompt("Enter a value for B: "));
        c = Number(prompt("Enter a value for C: "));

    if (a === 0) {
        // in A with a null value (equal to zero)
        console.log(`===================================================== \nREADING ERROR: value for A must not be equal to zero! \n=====================================================`);
        repeatingMain();
        return;
    };
    if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
        // in A, B or C with non-integer values
        console.log(`====================================================== \nREADING ERROR: values for A, B and C must be integers! \n======================================================`);
        repeatingMain();
        return;
    };

    // Showing quadratic function structure
    console.log(`============================== \nEquation: (${a}x²) + (${b}x) + (${c}) \n==============================`);

    // Calculating the Delta value
    const delta = (b * b) - (4 * a * c);

    // Showing the Delta value
    console.log(`Delta value: ${delta}`);

    // Calculating both values of X
    const x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
    const x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);

    // Showing some result cases as
    if (delta < 0) {
        // negative Delta
        // to test, use the following values: A = 1, B = 2, C = 5
        console.log(`=========================================================================== \nRESULT: for Delta with negative value, there are no possible real solution. \n===========================================================================`);
        // Asking the user if he wants the operation to be repeated
        repeatingMain();
        return;
    } 
    if (delta === 0) {
        // null Delta
        // to test, use the following values: A = 4, B = -12, C = 9
        console.log(`================================================================================ \nRESULT: for Delta with value equal to zero, both X's have the same values: ${x1} \n================================================================================`);
        // Asking the user if he whants the operation to be repeated
        repeatingMain();
        return;
    }
    // positive Delta
    // to test, use the following values: A = 2, B = -3, C = -5
    console.log(`============================================================== \nRESULT: for Delta with positive value, X¹: ${x1} and X²: ${x2} \n==============================================================`);
    // Asking the user if he whants the operation to be repeated
    repeatingMain();
    return;
};

// Function that asks the user if he whants the operation to be repeated using the prompt syncronization with terminal
function repeatingMain() : void {
    const asking: string = String(prompt(`Would you like the operation to be repeated? Enter 'y' for Yes and 'n' for No: `)).toLowerCase();
    
    // Assigning a character to each of the following options
    switch (asking) {
        // 'y' if you want the operation to repeat
        case "y": 
           console.log(`====================== \nRepeating operation... \n======================`);
            mainFunction();
            break;

        // 'n' if you want the operation to finish
        case "n":
        console.log(`================================== \n       Thank you for using \nthe quadratic equation calculator! \n \n        by JonaxPlanta :] \n==================================`);
            break;
        
        // In this case, the function repeats if the user entered any other character instead of 'y' or 'n'
        default:
            console.log(`========================================= \nREADING ERROR: enter a correct character! \n=========================================`);
            repeatingMain();
            break;
    };
};

// Starting code
    mainFunction();





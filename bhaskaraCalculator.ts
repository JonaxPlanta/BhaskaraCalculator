// Requesting the prompt syncronization with terminal function from 'prompt-sync' library
const prompt = require('prompt-sync')();

// Setting the code
// Introduction message
console.log(`
    ===================
    QUADRATIC FUNCTION 
        CALCULATOR        
    ===================
    `);

// The main function to run the code
function mainFunction() {
    // Defining the variables A, B and C by using numerical prompt syncronization with terminal
    let a: number = Number(prompt("Enter the value for A: "));
    let b: number = Number(prompt("Enter the value for B: "));
    let c: number = Number(prompt("Enter the value for C: "));

    // Verifying for any errors as
    if (a === 0) {
        // in A with a null value (equal to zero)
        console.log(`
                =====================================================
                READING ERROR: value for A must not be equal to zero!
                =====================================================
                `);
        return mainFunction();
    } else if (Number.isInteger(a) === false || Number.isInteger(b) === false || Number.isInteger(c) === false) {
        // in A, B or C with non-integer values
        console.log(`
                ======================================================
                READING ERROR: values for A, B and C must be integers!
                ======================================================
                `);
        return mainFunction();
    }

    // Showing quadratic function structure
    console.log(`
        ==============================
        Equation: (${a}x²) + (${b}x) + (${c})
        ==============================
        `);

    // Calculating the Delta value
    const delta = (b * b) + (-4 * a * c);

    // Showing the Delta value
    console.log(`Delta value: ${delta}`);

    // Calculating both values of X
    const x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
    const x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);

    // Showing some result cases as
    if (delta < 0) {
        // negative Delta
        // to test, use the following values: A = 1, B = 2, C = 5
        console.log(`
            ===========================================================================
            RESULT: for Delta with negative value, there are no possible real solution.
            ===========================================================================
            `);
    } else if (delta === 0) {
        // null Delta
        // to test, use the following values: A = 4, B = -12, C = 9
        console.log(`
            ================================================================================
            RESULT: for Delta with value equal to zero, both X's have the same values: ${x1} 
            ================================================================================
            `);
    } else {
        // positive Delta
        // to test, use the following values: A = 2, B = -3, C = -5
        console.log(`
            ==============================================================
            RESULT: for Delta with positive value, X¹: ${x1} and X²: ${x2}.
            ==============================================================
            `);
    };
    // Asking the user if he whants the operation to be repeated
    repeatingMain();
};

// Function that asks the user if he whants the operation to be repeated using the prompt syncronization with terminal
function repeatingMain() {
    const asking: string = String(prompt(`Would you like the operation to be repeated? Enter 'y' for Yes and 'n' for N: `));
    
    // Assigning a character to each of the following options
    switch (asking) {
        // 'y' if you want the operation to repeat
        case "y": 
           console.log(`
            ======================
            Repeating operation...
            ======================
            `);
            return mainFunction();
        ;
        // 'n' if you want the operation to finish
        case "n":
        console.log(`
            ==================================
                   Thank you for using
            the quadratic equation calculator!
                    by JonaxPlanta :]
            ==================================
            `);
        break;
        
        // In this case, the function repeats if the user entered any other character instead of 'y' or 'n'
        default:
            console.log(`
                =========================================
                READING ERROR: enter a correct character! 
                =========================================
                `);
            return repeatingMain();
        ;
    } 
};

// Starting code
mainFunction();





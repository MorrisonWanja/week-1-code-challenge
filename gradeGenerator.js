
// We first define a function called calculateGrade and implement loop conditions in the function body. Else if loop function is applied to
//traverse through the grading system.
function calculateGrade(grade){
    //The first condition of the loop function that checks whether the input entered is below 40 and returns a string indicating the grade the user
    // entered and the grade the score corresponds to in the grading system.
    if(grade >= 0 && grade < 40) {
        console.log(`Hi buddy! you scored ${grade} in the test you just did and your grade is an E.`)
        
    }
    //Check the input enterd whether it is between 40 and 49 and returns a string with the value a user entered and what grade the value corresponds to in the grading system.
    else if(grade >= 40 && grade <= 49){
        console.log(`Hi buddy you scored ${grade} in the test you just did and your grade is a D`);
    }
    //Checks the input entered whether it is greater than 49 and less than or equal to 59 and returns a string with the value entered and what grade the balue corresponds to in the grading system.
    else if (grade > 49 && grade <= 59){
        console.log(`Hi buddy! you scored ${grade} in the test you just did and your grade is a C.`);
    }
    // Check if a value enterd is between 60 and 79 and returns a string with the value entered and what grade the balue corresponds to in the grading system.
    else if (grade >= 60 && grade <= 79){
        console.log(`Hi buddy! you scored ${grade} in the test you just did and your grade is a B.`);
    }
    //Check if grade entered is above 70 but less or equal to 100 and returns a string with the value entered and what grade the balue corresponds to in the grading system.
    else if(grade > 79 && grade <= 100){
        console.log(`Hi buddy! you scored ${grade} in the test you just did and your grade is an A. Congratulations!!`);
    }
    // Checks the input enterd whether it fits into the previously defined conditions and if it does not fit in any of the categories a default statement is displayed to the user prompting them on what input should be entered.
    else
    {
        console.log("Wrong input, please enter a number between 0 to 100!. Dont use float valueS only integer values are accepted by the program.")
    }
}
calculateGrade(-10);
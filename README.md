# DJS02 Project Brief: Whole Number Divider

This project focuses on enhancing a web-based Whole Number Divider application. It's designed to help students apply their knowledge of error handling, guided by specific user stories. Before proceeding, familiarise yourself with the Gherkin syntax, a crucial tool for understanding user stories and requirements. Refer to the provided reading materials for a comprehensive guide. Below is the HTML and JavaScript code for a “Whole Number Divider”. At the moment it only meets two user stories (see below under “Resolved Stories”). Please ensure that it meets all user stories listed below:

This exercise provides user stories in [the Gherkin syntax](https://docs.behat.org/en/v2.5/guides/1.gherkin.html). Please make sure you understand the use and meaning of this syntax before continuing. Check out this resource from [Cucumber](https://cucumber.io/docs/gherkin/reference/).

#### Project Overview

The existing codebase for the Whole Number Divider meets certain user stories but falls short on others. Your task is to modify and extend the code to address all specified user stories, ensuring a robust, user-friendly application.

![alt text](image.png)

#### Starter Code

The provided HTML and JavaScript setup a basic form for inputting two numbers (dividend and divider) and a button to perform the calculation. The current script captures form submissions and displays the division result. However, it lacks validation, error handling, and the logic to meet all user stories.

<h2 style="color:#e67e22">Resolved Stories</h2>

1. **Initial State**: On page load, the message “No calculation performed” is displayed, indicating no action has been taken yet.
2. **Whole Number Division**: Upon submitting two numbers that divide evenly (e.g., 20 divided by 10), the application correctly displays the whole number result.

### Scenario: Starting program state

- GIVEN that the submit button has not been pressed yet
- AND the code has just loaded
- THEN “NO calculation performed” should be displayed at the bottom

### Scenario: Dividing numbers result in a whole number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 10 is entered into the second input
- THEN 2 should be displayed at the bottom
 
<h2 style="color:#e67e22">Unresolved Stories</h2> 

### Scenario: Dividing numbers result in a decimal number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 3 is entered into the second input
- THEN the number 6 with no decimal should be shown
 

### Scenario: Validation when values are missing

- GIVEN that the submit button is pressed
- WHEN either or both inputs are empty
- THEN the divisions should not be done
- AND the following should be displayed: “Division not performed. Both values are required in inputs. Try again”.
 

### Scenario: An invalid division should log an error in the console

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 0 is entered into the second input
- THEN the division should not be done
- AND the following should be displayed: “Division not performed. Invalid number provided. Try again”.
- AND an error should be logged in the browser console that shows the call stack
- BUT the program should not crash entirely
 

### Scenario: Providing anything that is not a number should crash the program

- GIVEN that the submit button is pressed
- WHEN ‘YOLO’ is entered into the first input
- AND ‘+++’ is entered into the second input
- THEN the entire screen should be replaced with “Something critical went wrong. Please reload the page
- AND an error should be logged in the browser console that shows the call stack.

#### Task Instructions

1. **Review the Starter Code**: Understand the current implementation and its limitations.
2. **Implement User Stories**: Modify the code to fulfill all unresolved user stories. Pay attention to error handling and user input validation.
3. **Error Handling**: Ensure the application handles errors gracefully, providing clear feedback to the user without crashing.
4. **Testing**: Test your application thoroughly with various inputs to ensure it meets all the user stories.

#### Submission Requirements

- Updated HTML and JavaScript files.
- Submit your project to the LMS Project Tab for DJS02

This project challenges you to think critically about user input, error handling, and providing a seamless user experience. Ensure your solution is robust, user-friendly, and meets the specified requirements.

 # Readme
 
 This is a VS Code style JavaScript code for a form that calculates the division of two input numbers.

 ## Features
 - Accepts user input for dividend and divider.
 - Validates inputs to ensure they are numbers.
 - Avoids division by zero and handles errors.
 - Displays the division result in a result element.
 - Includes console logging for debugging purposes.
 
 ### Object Destructuring
 `const { dividend, divider } = Object.fromEntries(entries);` - Converts form data to an object and destructures dividend and divider variables.
 
 ### Division Calculation
 `let divideResult = dividend / divider;` - Calculates the division of dividend by divider.
 
 ### Error Handling
 - `if ( divider === "0" ) {...}` - Checks if divider is zero and handles the error.
 - `if ( isNaN(dividend) || isNaN(divider) ) {...}` - Checks if dividend or divider is not a number and handles the error.
 - `if ( dividend === "" || divider === "") {...}` - Checks if both inputs are empty and handles the error.
 
### Challenges
- Extend the script to handle decimal numbers and display the result with a specific precision.
- Add more operations (addition, subtraction, multiplication) and create a menu to select the operation.
- Store previous calculations in memory and provide an option to view the history.
= Add a clear button to reset the form and remove the result from the result element.
- Improve error handling to display error messages next to the relevant input fields.

### Project Process
- Identify requirements and objectives.
- Design the form layout and elements.
- Develop the JavaScript functions to perform calculations and handle errors.
- Integrate JavaScript functions with the form elements and event listeners.
- Test the form with various inputs and debug any issues.
 Feedback
- The script is simple and straightforward, providing a good starting point for form-based calculations.
- Adding more comments and documentation could make it easier for other developers to understand and maintain the code.
- Implementing more robust error handling and user-friendly error messages would improve the user experience.
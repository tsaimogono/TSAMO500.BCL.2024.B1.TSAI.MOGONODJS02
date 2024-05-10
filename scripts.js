const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// Attach a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Extract input values from the form and convert them into an object
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Log input values for debugging purposes
  console.log(dividend);
  console.log(divider);

  // Calculate the division result
  let divideResult = dividend / divider;

  // If the result is not an integer, round it down
  if ( divideResult % 1 !== 0) {
    divideResult = Math.floor(divideResult);
  };

  // Check if both input values are present
  if ( dividend === "" || divider === "") {
    
    // Display an error message if either value is missing
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  };

  // Check if input values are valid numbers
  if ( isNaN(dividend) || isNaN(divider) ) {
    console.error("Invalid input values", new Error("Input values should be numbers.") );
    // Display a critical error message and exit the function
    result.classList.add("critical-error");
    result.innerText = "Something critical went wrong. Please reload the page.";
    
    return;
  };
  
  // Display the division result
  result.innerText = divideResult;
});
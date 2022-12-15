/********f***********
    
	Project 3 Javascript
	Name:Fevin Biju
	Date:26 November 2022
	Description: Form validation second chance

********************/

function validate(e) {
	// Hides all error elements on the page
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;


}


function formHasErrors() {
	// Determine if any items are in the cart
	// When the cart has not items, submission of form is halted
	

	let errorFlag = false;
	let requiredFields = ["fullname", "email","message"];
	for (let i = 0; i < requiredFields.length; i++) {
		let textField = document.getElementById(requiredFields[i]);
		if (textField.value == null || trim(textField.value) == "" ) {
			document.getElementById(requiredFields[i] + "_error").style.display = "block";

			if (!errorFlag) {
				textField.focus();
				textField.select();
			}
			errorFlag = true;

		}
	
	let regex2 = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
	let email = document.getElementById("email").value;
	if (!regex2.test(email)) {
		document.getElementById("emailformat_error").style.display = "block";
		if (!errorFlag) {
			document.getElementById("email").focus();
			document.getElementById("email").select();

			}
			errorFlag = true;

		
	}
	
	

	
}



	return errorFlag;

}



/*
 * Hides all of the error elements.
 */
function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Handles the load event of the document.
 */
function load() {
	
	hideErrors();

}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);













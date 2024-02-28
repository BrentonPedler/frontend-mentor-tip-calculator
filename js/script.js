document.addEventListener('DOMContentLoaded', function () {
	const billInput = document.querySelector('input[name="bill"]');
	const peopleInput = document.querySelector('input[name="people"]');
	const customTipInput = document.querySelector('input.custom-tip');
	const tipButtons = document.querySelectorAll('.tip-button');
	const totalResultDiv = document.querySelector('.total-result');
	const tipAmountDiv = document.querySelector('.tip-result');
	const errorMessage = document.querySelector('.error-message');
	const errorBorder = document.querySelector('.error-border');

	// Initial Tip Percentage
	let tipPercentage = 0;

	// Set Initial Value to 0.00 on pageload
	totalResultDiv.textContent = '$0.00';
	tipAmountDiv.textContent = '$0.00';

	// Handles Display of Error Message
	function handlePeopleInputError() {
		const billValue = parseFloat(billInput.value) || 0;
		const peopleValue = parseInt(peopleInput.value) || 0;

		if (billValue > 0 && peopleValue === 0) {
				errorMessage.style.display = 'block';
				errorBorder.style.border = "2px solid red"
		} else {
				errorMessage.style.display = 'none';
				errorBorder.style.border = "none";
		}
	}

	// Calculate tip and total per person
	function calculatePerPerson(billValue, peopleValue, tipAmount) {
		if (peopleValue > 0) {
			return {
				tipPerPerson: (tipAmount / peopleValue).toFixed(2),
				totalPerPerson: ((billValue + tipAmount) / peopleValue).toFixed(2)
			};
		}
		return { tipPerPerson: '0.00', totalPerPerson: '0.00' };
	}

	// Update UI with calculated values
	function updateUI(tipPerPerson, totalPerPerson) {
		if (tipAmountDiv && totalResultDiv) { // Check if elements are not null
				tipAmountDiv.textContent = `$${tipPerPerson}`;
				totalResultDiv.textContent = `$${totalPerPerson}`;
		} else {
				console.error('UI elements not found');
		}
	}


	// Main calculate function
	function calculateTotals() {
		const billValue = parseFloat(billInput.value) || 0;
		const peopleValue = parseInt(peopleInput.value) || 0;
		const tipAmount = billValue * (tipPercentage / 100);

		handlePeopleInputError();

		// Calculate and update UI only if there is no error
		if (peopleValue > 0) {
				const { tipPerPerson, totalPerPerson } = calculatePerPerson(billValue, peopleValue, tipAmount);
				updateUI(tipPerPerson, totalPerPerson);
		} else {
				updateUI('0.00', '0.00');
		}
	}

	// Event listeners for tip buttons
	tipButtons.forEach(button => {
		button.addEventListener('click', function () {
			// Remove active class from all buttons and then add to the clicked one
			tipButtons.forEach(btn => btn.classList.remove('active'));
			button.classList.add('active');

			// Update tip percentage
			tipPercentage = parseInt(button.value);
			calculateTotals();
		});
	});

	// Event listener for custom tip input
	customTipInput.addEventListener('input', function () {
		tipPercentage = parseFloat(customTipInput.value) || 0;
		calculateTotals();
	});

	// Add the input event listener to the people input to check for errors
	peopleInput.addEventListener('input', calculateTotals);

	// Reset functionality
	function resetForm() {
		billInput.value = '';
		peopleInput.value = '';
		customTipInput.value = '';
		tipPercentage = 0;

		tipButtons.forEach(button => button.classList.remove('active'));

		totalResultDiv.textContent = '$0.00';
		tipAmountDiv.textContent = '$0.00';
		errorMessage.style.display = 'none'; // Hide the error message on reset
	}

	const resetButton = document.querySelector('.reset-form');
	resetButton.addEventListener('click', resetForm);

});

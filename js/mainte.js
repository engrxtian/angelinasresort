// Get the check availability button and the maintenance message element
const checkAvailabilityBtn = document.getElementById('check-availability-btn');
const maintenanceMessage = document.getElementById('maintenance-message');

// Add a click event listener to the check availability button
checkAvailabilityBtn.addEventListener('click', function(event) {
    // Prevent the form from submitting (you might want to validate the form before preventing submission)
    event.preventDefault();

    // Check if the site is under maintenance (you can set this condition based on your requirements)
    const isUnderMaintenance = true; // Change this condition based on your maintenance status

    // Display the maintenance message if the site is under maintenance
    if (isUnderMaintenance) {
        maintenanceMessage.innerText = 'Sorry, the site is currently under maintenance. Please try again later.';
        maintenanceMessage.style.display = 'block';
    } else {
        // If not under maintenance, you can submit the form or perform other actions
        document.querySelector('form').submit(); // This submits the form, adjust it based on your needs
    }
});

// Simple script to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (!name || !email) {
            alert("Please fill in all required fields.");
        } else {
            alert("Thank you for your message, " + name + "!");
        }
    });
});

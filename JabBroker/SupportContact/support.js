document.getElementById("supportForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill all fields before submitting.");
        return;
    }

    // Generate ticket number
    const ticketNumber = "TKT-" + Math.floor(100000 + Math.random() * 900000);

    // Display confirmation
    const resultElement = document.getElementById("ticketResult");
    resultElement.innerHTML = `? Your support ticket <strong>${ticketNumber}</strong> has been created. We'll contact you shortly.`;

    // ?? PLACEHOLDER: Add API call here to send data to admin or email system
    // Example:
    // fetch('https://your-api-endpoint.com/support', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({ name, email, subject, message, ticketNumber })
    // })
    // .then(res => res.json())
    // .then(data => console.log('Ticket saved:', data))
    // .catch(err => console.error('Error:', err));

    // Reset form
    e.target.reset();
});

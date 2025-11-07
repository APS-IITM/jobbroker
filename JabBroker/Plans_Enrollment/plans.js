// Handle payment based on plan selected
function enroll(amount) {
    alert(`Selected Plan: ?${amount}`);

    // ?? WARNING: PAYMENT API NOT YET INTEGRATED
    // ------------------------------------------------
    // TODO: Replace this section with Razorpay or UPI integration
    // Example for Razorpay:
    // const options = {
    //   key: "YOUR_RAZORPAY_KEY_ID",  // <-- Add your API key here
    //   amount: amount * 100,          // Amount in paise
    //   currency: "INR",
    //   name: "Job Brokerage Enrollment",
    //   description: `Enrollment for ?${amount} plan`,
    //   handler: function (response) {
    //       alert("Payment Successful: " + response.razorpay_payment_id);
    //       window.location.href = "registration.html?plan=" + amount;
    //   },
    //   prefill: {
    //       name: "",
    //       email: "",
    //       contact: ""
    //   },
    //   theme: {
    //       color: "#004aad"
    //   }
    // };
    // const rzp = new Razorpay(options);
    // rzp.open();
    // ------------------------------------------------

    // TEMPORARY fallback if payment API not added
    const proceed = confirm("?? Payment gateway not connected.\nDo you want to simulate payment success?");
    if (proceed) {
        // Redirect to registration form after payment
        window.location.href = `registration.html?plan=${amount}`;
    }
}

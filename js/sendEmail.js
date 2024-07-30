// Initialize EmailJS
(function(){
    emailjs.init("5RsoZVn79u5B3maVq"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var formData = {
        from_name: document.getElementById('name').value,
        reply_to: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send the email using EmailJS
    emailjs.send("service_284j6en", "template_x8cgt0g", formData)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
        }, function(error) {
            console.error("FAILED...", error);
            alert("Message could not be sent.");
        });
});
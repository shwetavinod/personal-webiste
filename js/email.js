window.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("#contact-form");
  
    contactForm.onsubmit = function(event) {
      event.preventDefault();
  
      const name = document.querySelector('input[type="text"][placeholder="Name"]').value;
      const email = document.querySelector('input[type="email"][placeholder="Email"]').value;
      const subject = document.querySelector('input[type="text"][placeholder="Subject"]').value;
      const message = document.querySelector('textarea[placeholder="Message"]').value;
  
      if (name && email && subject && message) {
        emailjs.send("service_5975316", "template_dkdv3ec", {
          to_name: "Shweta V",
          from_name: name,
          from_email: email,
          Subject: subject,
          message: message
        }, 'lDus-Ntqw2UfD88ew')
          .then(function(response) {
            contactForm.reset();
            alert("Thank you. I will get back to you as soon as possible..!");
          })
          .catch(function(error) {
            alert("Failed to send message. Please try again later.");
          });
      } else {
        alert("Please fill in all fields.");
      }
    };
});
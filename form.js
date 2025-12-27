(function () {
    emailjs.init("ihjytEOXs66kbHLwo");   // ← from EmailJS dashboard
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_c0svdbj",     // ← Email Services
        "template_iyo8n08",    // ← Email Templates
        this
    ).then(
        function () {
            document.getElementById("status").innerText = "Message sent successfully!";
            document.getElementById("contact-form").reset();
        },
        function (error) {
            document.getElementById("status").innerText = "Failed to send message.";
            console.log(error);
        }
    );
});

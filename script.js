// JavaScript for form validation

document.querySelector("form").addEventListener("submit", function(e) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        e.preventDefault(); // Prevent form submission
    } else {
        alert("Thank you for your message, " + name + "!");
    }
});
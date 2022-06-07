//Message popup validation and error message
const validateMessage = "Thank you for telling us, we will answer you quickly ! 🐘";
const errorMessage = "Please fill in all the fields";

//Variables for the form
const firstname = document.getElementById("firstname"); //firstname
const lastname = document.getElementById("lastname"); //lastname
const email = document.getElementById("email"); //email
const message = document.getElementById("message"); //message

//Action when the form is submitted
document
.getElementById("contactForm")
.addEventListener("submit", function (event) {
    if ( //Is this field empty? it should be filled in....but with what?
        firstname.value === "" ||
        lastname.value === "" ||
        email.value === "" ||
        message.value === ""
        ) {
            alert(errorMessage);
        } else { //is this field filled? Oh! you found how to fill it!
            event.preventDefault();
            alert(validateMessage);
            console.log("message sent: <br>" +
            "firstname: " + firstname.value + "<br>" +
            "lastname: " + lastname.value + "<br>" + 
            "email: " + email.value + "<br>" + 
            "message: " + message.value); 
        }
    });
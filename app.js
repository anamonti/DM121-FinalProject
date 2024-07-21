const form = document.getElementById("formContact");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateForm()) {
        alert("Mensagem enviada com sucesso!");
        form.name.value = "";
        form.email.value = "";
        form.phone.value = "";
        form.message.value = "";
        form.name.focus();
    }
});

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const nameError = document.getElementById(
        "name-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );
    const phoneError = document.getElementById(
        "phone-error"
    );
    const messageError = document.getElementById(
        "message-error"
    );

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (phone === "") {
        phoneError.textContent =
            "Please enter your phone.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent =
            "Please enter a message.";
        isValid = false;
    }

    return isValid;
}
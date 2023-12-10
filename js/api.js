let postData = () => {
  let emailform = document.getElementById("email-form");
  let thankForm = document.getElementById("thankForm");
  let errorBlock = document.getElementById("errorBlock");
  let emailError = document.getElementById("emailError");
  errorBlock.style.display = "none";
  let EMAIL = document.getElementById("EMAIL").value;
  let submitBtn = document.getElementById("submit-newsletter");
  var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var result = reg.test(EMAIL);

  if (result === true) {
    submitBtn.disabled = true;
    submitBtn.value = "Please wait...";
    fetch(
      "https://retrodroproyaleserver.onrender.com/subscribeNewsetter",
      // "http://localhost:5000/subscribeNewsetter",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: EMAIL,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          emailform.style.display = "none";
          thankForm.style.display = "block";
          submitBtn.value = "Subscribe";

          return;
        } else {
          submitBtn.disabled = false;
          errorBlock.style.display = "block";
          emailError.innerHTML =
            "Oops! Something went wrong while submitting the form.";
          submitBtn.value = "Subscribe";
          return;
        }
      })
      .catch((e) => {
        submitBtn.disabled = false;
        errorBlock.style.display = "block";
        emailError.innerHTML =
          "Oops! Something went wrong while submitting the form.";
        submitBtn.value = "Subscribe";
      });
    return true;
  } else if (!EMAIL) {
    errorBlock.style.display = "block";
    emailError.innerHTML = "Please enter your email";
    setTimeout(() => {
      errorBlock.style.display = "none";
    }, 2000);
    return;
  } else {
    errorBlock.style.display = "block";
    emailError.innerHTML = "Please enter email in correct format";
    setTimeout(() => {
      errorBlock.style.display = "none";
    }, 2000);
    return;
  }
};
let postForm = () => {
  let contactForm = document.getElementById("Contact-Form");
  let thankForm = document.getElementById("success-form");
  let errorBlock = document.getElementById("error-form");
  let textError = document.getElementById("textError");
  errorBlock.style.display = "none";

  errorBlock.style.color = "white";
  let name = document.getElementById("Name").value;
  let email = document.getElementById("Email").value;
  let message = document.getElementById("Text-Area").value;
  let agreement = document.getElementById("agreement");
  let submitBtn = document.getElementById("submit-contactForm");
  var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var emailResult = reg.test(email);
  let interests = [];
  let readiness = "";
  document.querySelectorAll('[name="interest"]').forEach((item) => {
    if (item.checked === true) {
      interests.push(item.value);
    }
  });
  document.querySelectorAll('[name="readiness"]').forEach((item) => {
    if (item.checked === true) {
      readiness = item.value;
    }
  });

  if (
    !name ||
    !email ||
    !message ||
    agreement.checked === false ||
    interests.length === 0 ||
    readiness == ""
  ) {
    errorBlock.style.display = "block";
    errorBlock.style.backgroundColor = "red";
    textError.innerHTML = "All the fields are mandatory";
    setTimeout(() => {
      errorBlock.style.display = "none";
      errorBlock.style.backgroundColor = "#515eff";
    }, 3500);
    return;
  } else if (emailResult == false) {
    errorBlock.style.display = "block";
    errorBlock.style.backgroundColor = "red";
    textError.innerHTML = "Please enter email in correct format";
    setTimeout(() => {
      errorBlock.style.display = "none";
      errorBlock.style.backgroundColor = "#515eff";
    }, 3500);
    return;
  } else {
    submitBtn.disabled = true;
    submitBtn.value = "Please wait...";
    fetch(
      "https://retrodroproyaleserver.onrender.com/submitContactForm",
      // "http://localhost:5000/submitContactForm",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: email,
          message,
          interests,
          readiness,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          contactForm.style.display = "none";
          thankForm.style.display = "block";
          submitBtn.value = "Send Request";

          return;
        } else {
          submitBtn.disabled = false;

          submitBtn.value = "Send Request";
          errorBlock.style.display = "block";
          errorBlock.style.backgroundColor = "#cc9c00";
          errorBlock.style.color = "#333333";
          textError.innerHTML =
            "Oops! Something went wrong while submitting the form.";

          return;
        }
      })
      .catch((e) => {
        submitBtn.disabled = false;
        errorBlock.style.display = "block";
        errorBlock.style.color = "#333333";
        errorBlock.style.backgroundColor = "#cc9c00";
        textError.innerHTML =
          "Oops! Something went wrong while submitting the form.";
        submitBtn.value = "Send Request";
      });
    return true;
  }
};

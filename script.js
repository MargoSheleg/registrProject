const inputName = document.querySelector(".firstName");
const inputLastName = document.querySelector(".lastName");
const inputEmail = document.querySelector(".email");
const inputPhoneNumber = document.querySelector(".phoneNumber");
const inputPassword = document.querySelector(".password");

const signUpBtn = document.querySelector(".signUpBtn");

const signUpError = document.createElement("p");
signUpError.setAttribute("class", "signUpError");
signUpError.innerText = "You should fill all the fields, please";

signUpBtn.addEventListener("click", () => {
  if (
    inputName.value == "" ||
    inputLastName.value == "" ||
    inputEmail.value == "" ||
    inputPhoneNumber.value == "" ||
    inputPassword.value == ""
  ) {
    inputPassword.after(signUpError);
  } else {
    const user = {
      name: inputName.value,
      lastName: inputLastName.value,
      email: inputEmail.value,
      phoneNumber: inputPhoneNumber.value,
      password: inputPassword.value,
    };

    localStorage.setItem("user", JSON.stringify(user));

    inputName.value = "";
    inputLastName.value = "";
    inputEmail.value = "";
    inputPhoneNumber.value = "";
    inputPassword.value = "";
    signUpError.remove();
  }
});

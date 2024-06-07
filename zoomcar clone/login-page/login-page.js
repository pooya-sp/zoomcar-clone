const emailInp = document.querySelector(".email-input");
const signupBtn = document.querySelector(".sign-up-btn");
const emailVaildError = document.querySelector(".email-valid-error-text");
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function userName(email) {
  const name = email.split("@")[0];
  return name;
}
signupBtn.addEventListener("click", function (e) {
  if (!validateEmail(emailInp.value)) {
    console.log(false);
    emailInp.style.borderBottom = "1px solid red";
    emailVaildError.classList.remove("hidden");
  } else {
    emailInp.style.borderBottom = "1px solid black";
    emailVaildError.classList.add("hidden");
    const username = userName(emailInp.value);
    alert(`You signed up successfully ${username} `);
    localStorage.setItem("emailAddress", emailInp.value);
    this.setAttribute("href", "../index.html");
  }
});

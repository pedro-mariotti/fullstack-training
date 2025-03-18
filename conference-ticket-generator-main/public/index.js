console.log("Hello world");
const userForm = document.getElementById("user-form");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var formData = new FormData(userForm);
  console.log(Object.fromEntries(formData));
});

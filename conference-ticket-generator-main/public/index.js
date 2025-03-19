console.log("Hello world");

const userForm = document.getElementById("user-form");
const filledTicked = document.getElementById("ticket");

const userImageInput = document.getElementById("pfp-upload");
const filledUserImageInputDiv = document.getElementById("filled-pfp");
const unfilledUserImageInputDiv = document.getElementById("unfilled-pfp");
const removePfpButton = document.getElementById("remove-pfp");
const pfpTempImage = document.getElementById("pfp-temp-image");

var userProfilePic = null;
var userName = null;
var userMail = null;
var userGithub = null;
var ticketToggle = false;

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var formData = new FormData(userForm);
  userName = formData.get("nome");
  userMail = formData.get("email");
  userGithub = formData.get("github");
});
userImageInput.onchange = (e) => {
  const filesPfp = e.target.files;
  const reader = new FileReader();
  console.log(filesPfp);
  if (filesPfp.length > 0) {
    reader.onload = function (event) {
      userProfilePic.src = event.target.result;
    };
    reader.readAsDataURL(filesPfp[0]);

    filledUserImageInputDiv.style.display = "flex ";
    unfilledUserImageInputDiv.style.display = "none";
  } else {
    filledUserImageInputDiv.style.display = "none";
    unfilledUserImageInputDiv.style.display = "block";
  }
};
removePfpButton.onclick = () => {};

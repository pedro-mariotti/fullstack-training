console.log("Hello world");

const userForm = document.getElementById("user-form");
const filledTicked = document.getElementById("ticket");

const userImageInput = document.getElementById("pfp-upload");
const filledUserImageInputDiv = document.getElementById("filled-pfp");
const unfilledUserImageInputDiv = document.getElementById("unfilled-pfp");
const removePfpButton = document.getElementById("remove-pfp");
const pfpTempImage = document.getElementById("pfp-temp-image");
var filesPfp = null;

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
  filesPfp = e.target.files;
  const reader = new FileReader();
  console.log(filesPfp);
  console.log(userImageInput.value);

  if (filesPfp.length > 0) {
    reader.onload = function (event) {
      pfpTempImage.src = event.target.result;
    };
    reader.readAsDataURL(filesPfp[0]);

    filledUserImageInputDiv.style.display = "flex";
    unfilledUserImageInputDiv.style.display = "none";
  } else {
    filledUserImageInputDiv.style.display = "none";
    unfilledUserImageInputDiv.style.display = "block";
  }
};
removePfpButton.onclick = () => {
  pfpTempImage.src = "";
  console.log(userImageInput.value);
  userImageInput.value = "";
  unfilledUserImageInputDiv.style.display = "block";
  filledUserImageInputDiv.style.display = "none";
};

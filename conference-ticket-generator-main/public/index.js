console.log("Hello world");

const userForm = document.getElementById("user-form");

const userImageInput = document.getElementById("pfp-upload");
const filledUserImageInputDiv = document.getElementById("filled-pfp");
const unfilledUserImageInputDiv = document.getElementById("unfilled-pfp");
const removePfpButton = document.getElementById("remove-pfp");
const pfpTempImage = document.getElementById("pfp-temp-image");
const ticketSection = document.getElementById("ticket-section");
const textUserName = document.getElementsByClassName("text-user-name");
var filesPfp = null;

var userProfilePic = null;
var userName = null;
var userMail = null;
var userGithub = null;

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(userForm);
  userForm.style.display = "none";
  ticketSection.style.display = "flex";

  userName = formData.get("nome");
  userMail = formData.get("email");
  userGithub = formData.get("github");
  userProfilePic = formData.get("profilepic");

  if (userProfilePic) {
    const reader = new FileReader();
    reader.onload = function (event) {
      document.getElementById("ticket-avatar").src = event.target.result;
    };
    reader.readAsDataURL(userProfilePic);
  }

  for (var i = 0; i < textUserName.length; i++) {
    textUserName[i].innerText = userName;
  }
  document.getElementById("text-email").innerText = userMail;
  document.getElementById("text-github").innerText = userGithub;
});
userImageInput.onchange = (e) => {
  filesPfp = e.target.files;
  const reader = new FileReader();

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
document.getElementById("change-pfp").addEventListener("click", () => {
  userImageInput.click();
});

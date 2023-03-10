const form = document.querySelector("form");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "action.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      successMessage.style.display = "block";
    }
  };
  xhr.send(new FormData(form));
});
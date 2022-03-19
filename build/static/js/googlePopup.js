function showGooglePopup(event) {
  event.preventDefault();
  const googleURL = "http://localhost:8081/auth/google";
  const newWindow = window.open(
    googleURL,
    "_blank",
    "toolbar=no, menubar=no, width=600, height=700, top=100, left=100"
  );
}

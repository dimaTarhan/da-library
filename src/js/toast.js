function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("da-toast-example");

  x.className = "show";

  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);
}

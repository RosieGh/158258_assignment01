function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("First Name must be filled out");
    return false;
  }

  x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("email must be filled out");
    return false;
  }
}
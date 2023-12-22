function validateForm() {
  // Name validation
  var name = document.getElementById("name");
  if (name.value == "") {
    document.querySelector(".status").innerHTML =
      "<span class = 'invalid'>Name field cannot be empty</span>";
    name.style.borderColor = "red";
    return false;
  } else {
    var re = /\d/;
    if (re.test(name.value)) {
      document.querySelector(".status").innerHTML =
        "<span class = 'invalid'>Invalid name: name field cannot contain any number</span>";
      name.style.borderColor = "red";
      return false;
    }
  }
  name.style.borderColor = "";

  // Email validation
  var email = document.getElementById("email");
  if (email.value == "") {
    document.querySelector(".status").innerHTML =
      "<span class = 'invalid'>Email field cannot be empty</span>";
    email.style.borderColor = "red";
    return false;
  } else {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.value)) {
      document.querySelector(".status").innerHTML =
        "<span class = 'invalid'>Invalid email format</span>";
      email.style.borderColor = "red";
      return false;
    }
  }

  email.style.borderColor = "";

  // Phone validation
  var phone = document.getElementById("phone");
  if (phone.value == "") {
    document.querySelector(".status").innerHTML =
      "<span class = 'invalid'>Phone field cannot be empty</span>";
    phone.style.borderColor = "red";
    return false;
  } else {
    var re = /^(\+2)?(011|012|010|015)\d{8}$/;
    if (!re.test(phone.value)) {
      document.querySelector(".status").innerHTML =
        "<span class = 'invalid'>Invalid phone number</span>";
      phone.style.borderColor = "red";
      return false;
    }
  }
  phone.style.borderColor = "";

  // Success message
  document.querySelector(".status").innerHTML =
    "<span class = 'valid'>Your data have been submitted successfully</span>";
}

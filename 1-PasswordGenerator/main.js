function generate() {
  char_length = document.getElementById("input").value;
  document.getElementsByClassName("char-length")[0].innerHTML = char_length;
  password = getPassword(char_length);
  document.getElementsByClassName("password")[0].innerHTML = password;
}
function getPassword(length) {
  var chars =
    "0123456789abcdefghijklmnghopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
  var random_string = "";
  if (length > 0) {
    for (var i = 0; i < length; i++) {
      random_string += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }
  return random_string;
}

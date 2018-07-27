const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  // Sets up errors variable as an empty object
  let errors = {};

  // Checks if field is empty and sets it to an empty string if isEmpty
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  /* Checks length of name field. If the length is less than or greater than the required number of chars, the errors variable is filled with the error string. */
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters.";
  }

  // Checks if name field is left empty
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required.";
  }

  // Checks if email field is left empty
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required.";
  }

  // Checks if email entered is a valid email address
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid. Please enter a valid email address.";
  }

  // Checks if password field is left empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required.";
  }

  // Checks if the length of the password is within the requirements
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters.";
  }

  // Checks if password confirmation field is left empty
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required.";
  }

  // Checks if password matchs the password confirmation field
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match.";
  }

  // When errors remains empty, isValid
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

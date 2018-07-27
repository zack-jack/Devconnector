const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  // Sets up errors variable as an empty object
  let errors = {};

  // Checks if field is empty and sets it to an empty string if isEmpty
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Checks if email entered is a valid email address
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid. Please enter a valid email address.";
  }

  // Checks if email field is left empty
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required.";
  }

  // Checks if password field is left empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required.";
  }

  // When errors remains empty, isValid
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

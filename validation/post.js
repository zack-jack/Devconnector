const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  // Sets up errors variable as an empty object
  let errors = {};

  // Checks if field is empty and sets it to an empty string if isEmpty
  data.text = !isEmpty(data.text) ? data.text : "";

  // Checks that length of the text field is within required params
  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post must be between 10 and 300 characters.";
  }

  // Checks if text field is left empty
  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required.";
  }

  // When errors remains empty, isValid
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  // Sets up errors variable as an empty object
  let errors = {};

  // Checks if field is empty and sets it to an empty string if isEmpty
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  // Checks if school field is left empty
  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required.";
  }

  // Checks if degree field is left empty
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required.";
  }

  // Checks if fieldofstudy field is left empty
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field is required.";
  }

  // Checks if from field is left empty
  if (Validator.isEmpty(data.from)) {
    errors.from = "From data field is required.";
  }

  // When errors remains empty, isValid
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

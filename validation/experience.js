const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  // Sets up errors variable as an empty object
  let errors = {};

  // Checks if field is empty and sets it to an empty string if isEmpty
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  // Checks if title field is left empty
  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is required.";
  }

  // Checks if company field is left empty
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required.";
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

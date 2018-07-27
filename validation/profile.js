const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  // Sets up errors variable as an empty object
  let errors = {};

  // Checks if field is empty and sets it to an empty string if isEmpty
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  // Checks if handle length is between 2 and 40 chars
  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    // if not within requirement, errors var object is filled with error message string
    errors.handle = "Handle must be between 2 and 40 characters.";
  }

  // Checks that the handle field is not left empty
  if (Validator.isEmpty(data.handle)) {
    // if field is left empty, errors var object is filled with error message string
    errors.handle = "Handle is a required field.";
  }

  // Checks that the status field is not left empty
  if (Validator.isEmpty(data.status)) {
    // if field is left empty, errors var object is filled with error message string
    errors.status = "Status is a required field.";
  }

  // Checks that the skills field is not left empty
  if (Validator.isEmpty(data.skills)) {
    // if field is left empty, errors var object is filled with error message string
    errors.skills = "Skills is a required field.";
  }

  // Checks that the website field is not left empty and then adds error string if it is not a valid URL
  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL.";
    }
  }

  // Checks that the facebook field is not left empty and then adds error string if it is not a valid URL
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL.";
    }
  }

  // Checks that the twitter field is not left empty and then adds error string if it is not a valid URL
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL.";
    }
  }

  // Checks that the linkedin field is not left empty and then adds error string if it is not a valid URL
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL.";
    }
  }

  // Checks that the instagram field is not left empty and then adds error string if it is not a valid URL
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL.";
    }
  }

  // Checks that the youtube field is not left empty and then adds error string if it is not a valid URL
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL.";
    }
  }

  // When errors remains empty, isValid
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

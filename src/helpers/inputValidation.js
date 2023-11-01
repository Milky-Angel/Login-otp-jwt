const { validate } = require("fastest-validator");

const userRegistrationSchema = {
  username: { type: "string" },
  email: { type: "string", email: true },
  age: { type: "number", positive: true, integer: true },
  subscribed: { type: "boolean" },
};

const validateRequest = (data) => {
  const v = new Validator({
    useNewCustomCheckerFunction: true, // using new version
    messages: {
      jobCurrencyRequired:
        "The salaryCurrency field must be required if min or max salary is provided!",
      salaryMaxLesser: "The '{field}' field must be greater than salaryMin.",
      dependencyFieldRequired: "The '{field}' field is required.",
      languageDependencyFieldRequired:
        "If language is selected, make sure to choose either read, write or speak.",
      expMinMaxRule:
        "Maximum years of experience cannot be less than the expected minimum years of experience.",
      mobileNumberNotValid: "The '{field}' field is not a valid mobile number.",
    },
  });
  const validationResult = v.compile(data, userRegistrationSchema);

  if (validationResult === true) {
    // Validation passed; return true to indicate success
    return true;
  }

  // Validation failed; return validation errors
  return validationResult;
};

module.exports = validateRequest;

import regexValidations from "../regex.ts";

export const ValidateCreateAccount = (
  username: string,
  password: string,
  password2: string,
  email: string
) => {
  const usernameRegex = regexValidations.usernameRegex;

  const passwordUpperCaseRegex = regexValidations.passwordUpperCaseRegex;
  const passwordSpecialCharacterRegex = regexValidations.passwordSpecialCharacterRegex;
  const passwordOneNumberRegex = regexValidations.passwordOneNumberRegex;

  const emailRegex = regexValidations.emailRegex;

  const errors = { username: "", password: "", password2: "", email: "" };

  if (username !== undefined) {
    if (username.length === 0) {
      errors.username = "";
    } else if (username.length < 3) {
      errors.username = "Username too short.";
    } else if (username.length > 32) {
      errors.username = "Username too long.";
    } else if (usernameRegex.test(username) === false) {
      errors.username = "Only special characters allowed are - and _.";
    }
  }

  if (password !== undefined) {
    if (password.length === 0) {
      errors.password = "";
    } else if (password.length < 8) {
      errors.password = "Password too short! 8 minimum letters.";
    } else if (password.length > 100) {
      errors.password = "That's a long ass password. 100 max tyvm.";
    } else if (passwordUpperCaseRegex.test(password) === false) {
      errors.password = "Must have at least one uppercase character.";
    } else if (passwordSpecialCharacterRegex.test(password) === false) {
      errors.password = "Must have at least one special character.";
    } else if (passwordOneNumberRegex.test(password) === false) {
      errors.password = "Must hae at least one number.";
    }
  }

  if (password2 !== undefined) {
    if (password2.length === 0) {
      errors.password2 = "";
    } else if (errors.password !== "") {
      errors.password2 = "Password field is incorrect.";
    } else if (password !== password2) {
      errors.password2 = "Passwords do not match.";
    }
  }

  if (email !== undefined) {
    if (email.length === 0) {
      errors.email = "";
    } else if (emailRegex.test(email) === false) {
      errors.email = "Not a valid email format.";
    }
  }

  return errors;
};

/*
    Username validation:
    1- Characters >= 3 or <= 32
    2- only - and _ as special characters

    Password Validation:
    1- Characters >= 8 or <= 100
    2- Must have at least one uppercase letter
    3- Must have at least one special character
    4- Must have at least one number

    Email Validation:
    1- Must have an @ symbol
    2- Domain must have letters and dots
    3- TLD must be between 2-6 characters

*/

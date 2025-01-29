export const createAccountValidation = (
  username: string,
  password: string,
  password2: string,
  email: string
) => {
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
    const usernameRegex = /^[a-zA-Z0-9-_]{3,32}$/g

    const passwordRegex = / /

    const emailRegex = / /
};

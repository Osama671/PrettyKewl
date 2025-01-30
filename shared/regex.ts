const regexValidations = {
  usernameRegex: /^[a-zA-Z0-9-_]{3,32}$/,
  passwordUpperCaseRegex: /^(?=.*[A-Z]).+$/,
  passwordSpecialCharacterRegex: /^(?=.*[!@#$%^&*]).+$/,
  passwordOneNumberRegex: /^(?=.*\d).+$/,
  emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
};

export default regexValidations;

// const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,100}$/;

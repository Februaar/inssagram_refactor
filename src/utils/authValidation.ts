export const validateEmail = (inputValue) => {
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailPattern.test(inputValue);
};

export const validatePassword = (inputValue) => {
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return passwordPattern.test(inputValue);
};

export const validateNickname = (inputValue) => {
  const nicknamePattern = /^[a-zA-Z0-9_.]{3,15}$/;

  return nicknamePattern.test(inputValue);
};

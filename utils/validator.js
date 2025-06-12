// Simple validation utilities

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  // At least 6 characters
  return typeof password === 'string' && password.length >= 6;
};

export const validateUsername = (username) => {
  // At least 3 characters, alphanumeric
  const re = /^[a-zA-Z0-9_]{3,}$/;
  return re.test(username);
};
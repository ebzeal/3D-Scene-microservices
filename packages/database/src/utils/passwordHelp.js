import argon2 from 'argon2';

const verifyPassword = async (hashedPassword, inputedPassword) => {
  try {
    return !!(await argon2.verify(hashedPassword, inputedPassword));
  } catch (err) {
    return err;
  }
};

export default verifyPassword;

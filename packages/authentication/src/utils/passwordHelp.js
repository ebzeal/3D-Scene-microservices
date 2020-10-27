import argon2 from 'argon2';

const hashPassword = async (password) => {
  try {
    return await argon2.hash(password);
  } catch (err) {
    return err;
  }
};

const verifyPassword = async (hashedPassword, inputedPassword) => {
  try {
    return !!(await argon2.verify(hashedPassword, inputedPassword));
  } catch (err) {
    return err;
  }
};

export { hashPassword, verifyPassword };

import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();

const secret = process.env.JWT_SECRET;
/**
 *
 *
 * @class tokenHelp
 */
class tokenHelp {
  /**
   *
   * @description Verifies a passed token and returns a decoded payload
   * @static
   * @param {string} token
   * @returns {object} Payload
   * @memberof Tokenize
   */
  static verify(token) {
    return jwt.verify(token, secret);
  }
}

export default tokenHelp;

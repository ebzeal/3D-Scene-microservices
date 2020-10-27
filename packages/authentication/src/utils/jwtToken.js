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
   * @description Encodes a passed token and returns a jwt token
   * @static
   * @param {*} payload
   * @param {string} [ttl='2h']
   * @returns {string} Jwt token
   * @memberof Tokenize
   */
  static sign(payload, ttl = '2h') {
    return jwt.sign(payload, secret, { expiresIn: ttl });
  }
}

export default tokenHelp;

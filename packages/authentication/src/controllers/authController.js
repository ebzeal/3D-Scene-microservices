import db from '../config/db';
import responseUtil from '../utils/apiResponse';
import { hashPassword, verifyPassword} from '../utils/passwordHelp';
import tokenHelp from '../utils/jwtToken';

/**
 * @class AuthController
 */
class AuthController {
  /**
   * @static
   * @param {*} req Request body
   * @param {object} res response object
   * @returns {object} database model
   * @memberof AuthController
   * @description Creates a new User in the db
   */
  static async createUser(req, res) {
    try {
      const { password, email, userName, fullName } = req.body;
      const hashedPassword = await hashPassword(password);
      const isUserName = await db.users.list().find((user) => user.userName === userName);
      if (isUserName && isUserName.userName === userName) return responseUtil(res, 409, 'failure', 'username already exist in our DB');
      const isUserEmail = await db.users.list().find((user) => user.email === email);
      if (isUserEmail && isUserEmail.email === email) return responseUtil(res, 409, 'failure', 'email already exist in our DB');
      const input = { password, email, userName, fullName };
      input.password = hashedPassword;
      const id = await db.users.create(input);

      const createUserResponse = tokenHelp.sign({
        id: id
      });
      return responseUtil(res, 200, 'success', 'New User Created', createUserResponse);
    } catch (error) { return error; }
  }

  /**
   * @static
   * @param {*} req Request body
   * @param {object} res Response object
   * @returns {object} database model
   * @memberof AuthController
   * @description logs in a user
   */
  static async loginUser(req, res) {
    try {
      const { password, details } = req.body;
      const isUser = db.users.list().find(
        (user) => user.email === details || user.userName === details
      );
      const decryptPassword = await verifyPassword(isUser?.password, password);
      if (!(isUser && decryptPassword)) return responseUtil(res, 404, 'failure', 'User not found');

      const loginResponse =  tokenHelp.sign({
        id: isUser.id
      });
      return responseUtil(res, 200, 'success', 'User found', loginResponse);
    } catch (error) {
      return error;
    }
  }
}

export default AuthController;

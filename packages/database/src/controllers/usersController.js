import db from '../config/db';
import responseUtil from '../utils/apiResponse';
import verifyPassword from '../utils/passwordHelp';

/**
 * @class UserController
 */
class UserController {
  /**
   * @static
   * @param {*} req Request body
   * @param {object} res response object
   * @returns {object} database model
   * @memberof UserController
   * @description Creates a new User in the db
   */
  static async createUser(req, res) {
    try {
      const { password, email, userName } = req.body;
      const isUserName = await db.users.list().find((user) => user.userName === userName);
      if (isUserName && isUserName.userName === userName) return responseUtil(res, 409, 'failure', 'username already exist in our DB');
      const isUserEmail = await db.users.list().find((user) => user.email === email);
      if (isUserEmail && isUserEmail.email === email) return responseUtil(res, 409, 'failure', 'email already exist in our DB');
      const input = { password, email, userName };
      const id = await db.users.create(input);
      const user = await db.users.get(id);

      return responseUtil(res, 201, 'success', 'New User Created', user);
    } catch (error) { return error; }
  }

  /**
   * @static
   * @param {*} req Request body
   * @param {object} res Response object
   * @returns {object} database model
   * @memberof UserController
   * @description fetches a User from the db
   */
  static async loginUser(req, res) {
    try {
      const { password, details } = req.body;
      const isUser = db.users.list().find(
        (user) => user.email === details || user.userName === details
      );
      const decryptPassword = await verifyPassword(isUser?.password, password);
      if (!(isUser && decryptPassword)) return responseUtil(res, 404, 'failure', 'User not found');

      return responseUtil(res, 200, 'success', 'User found', isUser);
    } catch (error) {
      return error;
    }
  }
}

export default UserController;

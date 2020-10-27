import db from '../config/db';
import responseUtil from '../utils/apiResponse';

/**
 * @class IdentityController
 */
class IdentityController {
  /**
   * @static
   * @param {*} req Request body
   * @param {object} res Response object
   * @returns {object} database model
   * @memberof IdentityController
   * @description fetches a User from the db
   */
  static async fetchUser(req, res) {
    try {
      const { id } = req.params;
      const user = await db.users.get(id);
      if (!user) return responseUtil(res, 404, 'failure', 'User not found');
      return responseUtil(res, 200, 'success', 'User found', user);
    } catch (error) {
      return error;
    }
  }
}

export default IdentityController;

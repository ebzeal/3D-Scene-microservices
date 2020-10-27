import db from '../config/db';
import responseUtil from '../utils/apiResponse';

/**
 * @class displayController
 */
class displayController {
  /**
   * @static
   * @param {*} req Request body
   * @param {object} res Response object
   * @returns {object} database model
   * @memberof displayController
   * @description fetches a User from the db
   */
  static async fetchUser(req, res) {
    try {
      const { shapeName } = req.params;
      const shapeValues = db.shapes.list().find(
        (shape) => shape.name === shapeName
      );
      if (!shapeValues) return responseUtil(res, 404, 'failure', `${shapeName} not ino ur db`);
      return responseUtil(res, 200, 'success', 'Shape found', shapeValues);
    } catch (error) {
      return error;
    }
  }
}

export default displayController;

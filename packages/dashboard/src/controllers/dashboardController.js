import db from '../config/db';
import responseUtil from '../utils/apiResponse';

/**
 * @class DashboardController
 */
class DashboardController {
  /**
   * @static
   * @param {*} req Request body
   * @param {object} res Response object
   * @returns {object} database model
   * @memberof DashboardController
   * @description fetches dashboard data from the db
   */
  static async getDashboardData(req, res) {
    try {
      const dashboardData = await db.dashboard.list();
      if (!dashboardData) return responseUtil(res, 404, 'failure', 'dashboardData not found');
      return responseUtil(res, 200, 'success', 'dashboardData found', dashboardData);
    } catch (error) {
      return error;
    }
  }
}

export default DashboardController;

import axios from 'axios';

const hostname = 'http://localhost';
const version = '/api/v1';
const authURL = `${hostname}:3000${version}`;
const identityURL = `${hostname}:3500${version}`;
const dashboardURL = `${hostname}:4000${version}`;
const displayURL = `${hostname}:4200${version}`;


/**
 * @class GatewayController
 */
class GatewayController {
  /**
   * @static
   * @param {*} _ Apollo server root
   * @param {object} input input from req body
   * @returns {object} database model
   * @memberof GatewayController
   * @description Creates a new User in the db
   */
  static async signUpUser(_, { input }) {
    try {
      const isCreated = await axios.post(`${authURL}/user`, input);
      const data = isCreated.data.data.payload;
      return data;
    } catch (error) {
      throw new Error(`${error.response.data.data.message || 'Auth Service Failure'}`);
    }
  }

  /**
   * @static
   * @param {*} _ Apollo server root arg
   * @param {object} logInDetails input from req body
   * @returns {object} database model
   * @memberof GatewayController
   * @description logs a user in
   */
  static async logUserIn(_, { logInDetails }) {
    try {
      const isLoggedIn = await axios.post(`${authURL}/user/login`, logInDetails);
      const data = isLoggedIn.data.data.payload;
      return data;
    } catch (error) {
      throw new Error(`${error.response.data.data.message || 'Auth Service Failure'}`);
    }
  }

  /**
   * @static
   * @param {*} _ Apollo server root
   * @param {*} __ Apollo server args
   * @param {string} id user id as context
   * @returns {object} database model
   * @memberof GatewayController
   * @description fetches a User from the db
   */
  static async getUser(_, { id }, context) {
    try {
      const isUser = await axios.get(`${identityURL}/user/${id}`, {headers:{'authorization': context.headers.authorization}});
      const data = isUser.data.data.payload;
      return data;
    } catch (error) {
      throw new Error(`${error?.response?.data?.data?.message || 'Identity Service Failure'}`);
    }
  }

  /**
   * @static
   * @param {*} _ Apollo server root
   * @param {*} __ Apollo server args
   * @param {string} id user id as context
   * @returns {object} database model
   * @memberof GatewayController
   * @description fetches dashboard values from the db
   */
  static async getDashboard(_, __, context) {
    try {
      const isDashboard = await axios.get(`${dashboardURL}/dashboard`, {headers:{'authorization': context.headers.authorization}});
      const data = isDashboard.data.data.payload[0];
      return data;
    } catch (error) {
      throw new Error(`${error?.response?.data?.data?.message || 'Dashboard Service Failure'}`);
    }
  }

  /**
   * @static
   * @param {*} _ Apollo server root
   * @param {*} id Apollo server args
   * @param {string} context request headers
   * @returns {object} database model
   * @memberof GatewayController
   * @description fetches a User from the db
   */
  static async getShape(_, { shapeName }, context) {
    try {
      const isShape = await axios.get(`${displayURL}/shape/${shapeName}`, {headers:{'authorization': context.headers.authorization}});
      const data = isShape.data.data.payload;
      return data;
    } catch (error) {
      throw new Error(`${error?.response?.data?.data?.message || 'Display Service Failure'}`);
    }
  }
}

export default GatewayController;

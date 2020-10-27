import GatewayController from '../controllers/gatewayController';

const {
  signUpUser, logUserIn, getUser, getDashboard, getShape
} = GatewayController;

const Query = {
  user: logUserIn,
  showUser: getUser,
  getDashboard,
  getShape
};

const Mutation = {
  createUser: signUpUser
};

module.exports = { Query, Mutation };

import GatewayController from '../controllers/gatewayController';

const { signUpUser, logUserIn, getUser } = GatewayController;

const Query = {
  user: logUserIn,
  showUser: getUser
};

const Mutation = {
  createUser: signUpUser
};

module.exports = { Query, Mutation };

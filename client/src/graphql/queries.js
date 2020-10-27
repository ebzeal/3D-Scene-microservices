import gql from 'graphql-tag';


export const logInQuery = gql`
  query LogInQuery($details: LogInDetails){
  access_token:user(logInDetails: $details)
}
`;

export const signUpMutation = gql`
  mutation CreateUser($input: CreateUserInput) {
  access_token: createUser(input: $input)
}
`;

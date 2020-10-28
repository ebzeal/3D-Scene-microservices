import gql from 'graphql-tag';


export const logInQuery = gql`
  query LogInQuery($details: LogInDetails){
  access_token:user(logInDetails: $details)
}
`;

export const getUserQuery = gql`
  query GetUserQuery($id:ID!) {
  showUser(id: $id){
    userName
    fullName
    email
  }
}
`;

export const dashboardQuery = gql`
  query DashboardQuery{
  dashboard: getDashboard {
    views
    clicks
    objects
    animated
  }
}
`;

export const shapeQuery = gql`
  query ShapeQuery($shapeName: String) {
  shape:getShape(shapeName: $shapeName){
    id
    name
    geopoints
    texture
    speed
    geometry
  }
}
`;

export const signUpMutation = gql`
  mutation CreateUser($input: CreateUserInput) {
  access_token: createUser(input: $input)
}
`;

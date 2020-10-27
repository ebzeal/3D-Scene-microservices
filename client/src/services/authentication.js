import decodeJwt from 'jwt-decode';


export const getAccessToken = () => localStorage.getItem('access_token');

export const decodeToken = (token) => decodeJwt(token);

export const getAccesTokenUser = () => {
  const token = getAccessToken();
  if (!token) {
    return null;
  }
  const decToken = decodeToken(token);
  return decToken
}

export const logOut =()=> {
  localStorage.removeItem('access_token');
}

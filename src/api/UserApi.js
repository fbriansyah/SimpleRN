import {login_url} from './urls';
// function yang menghandle login request ke server
export const loginRequest = async (username, password) => {
  const urlSend = `${login_url}?username=${username}&password=${password}`;
  // let responseData = {code: 0, message: '', data: null};
  const res = await fetch(urlSend);
  return await res.json();
};

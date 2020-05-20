// import {login_url} from './urls';
// import Axios from 'axios';
// function yang menghandle login request ke server
// TODO: CHANGE TO REAL API
export const loginRequest = (username, password) => {
  // const urlSend = `${login_url}?username=${username}&password=${password}`;
  // console.log(urlSend);

  // FIXME: Remove harcoded user
  const defaultUser = {
    username: 'admin',
    password: 'admin',
    token: '123jsayuiqwen2931ks',
  };

  // TODO: REMOVE dummy data
  let responseMessage = {
    code: 0,
    message: '',
    data: null,
  };

  if (username !== defaultUser.username && password !== defaultUser.password) {
    responseMessage.code = 1;
    responseMessage.message = 'Username atau password salah';
  } else {
    responseMessage.data = defaultUser;
  }

  return responseMessage;

  // return new Promise((resolve, reject) => {
  //   window.setTimeout(function() {

  //     console.log(`[UserApi]: ${responseMessage}`);
  //     resolve(responseMessage);
  //   }, 1000);
  // });

  // FIXME: Error fetch from server
  // return Axios.get(urlSend)
  //   .then(res => {
  //     // FIXME: Dummy response
  //     // const data = res.json();
  //     console.log(res);
  //     // if (data.length <= 0) {
  //     //   responseMessage.code = 1;
  //     //   responseMessage.message = 'Username dan password tidak ditemukan';
  //     // } else {
  //     //   responseMessage.data = data;
  //     // }
  //     return res;
  //   })
  //   .catch(err => console.error(`[loginRequest]: ${err}`));
};

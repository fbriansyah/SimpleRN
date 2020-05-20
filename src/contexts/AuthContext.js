import React from 'react';

import {loginRequest} from '../api/UserApi';

const intialState = {
  isLogin: false,
  isLoading: false,
  error: '',
  user: {
    username: '',
    password: '',
    token: '',
  },
};

export const AuthContext = React.createContext();

const types = {
  login: 'login',
  logout: 'logout',
  error: 'error',
  loadingStart: 'loading',
  loadingEnd: 'loadingEnd',
};

// aksi yang akan dijalankan berdasarkan type dari action
function reducer(state, action) {
  switch (action.type) {
    case types.login: {
      return {...state, isLogin: true, user: action.payload};
    }
    case types.error: {
      console.log(`error: ${action.payload}`);
      return {...state, error: action.payload};
    }
    case types.loadingStart: {
      return {...state, isLoading: true};
    }
    case types.loadingEnd: {
      return {...state, isLoading: false};
    }
    case types.logout: {
      return {...state, user: {...intialState.user}, isLogin: false};
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

// provider untuk menggunakan useAuth hook
export function AuthProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, intialState);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <AuthContext.Provider value={value} {...props} />;
}

// hook untuk mengambil context berkaitan dengan auth
export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth harus digunakan didalam AuthProvider');
  }
  const [state, dispatch] = context;

  // login logic
  const login = (username, password) => {
    // dispatch({type: types.loadingStart}); // start loading

    const response = loginRequest(username, password);
    if (response.code !== 0) {
      dispatch({
        type: types.error,
        payload: response.message,
      });
    } else {
      dispatch({type: types.login, payload: response.data});
    }
    // loginRequest(username, password)
    //   .then(response => {
    //     // cek response code dari api
    //     console.log(response);
    //     if (response === undefined) {
    //       return dispatch({
    //         type: types.error,
    //         payload: 'Something wrong',
    //       });
    //     }

    //     if (response.code !== 0) {
    //       dispatch({
    //         type: types.error,
    //         payload: 'Username atau password salah',
    //       });
    //     } else {
    //       dispatch({type: types.login, payload: response.data});
    //     }
    //   })
    //   .catch(err => console.error(`[AuthContext:login]: ${err}`))
    //   .finally(() => dispatch({type: types.loadingEnd})); // end loading
  };

  const logout = () => dispatch({type: types.logout});

  return {
    state,
    dispatch,
    types,
    login,
    logout,
  };
}

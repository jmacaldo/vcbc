import axios from 'axios';

export const EXPRESS_TEST_START = "EXPRESS_TEST_START";
export const expressTestStart = () => {
    return { type: EXPRESS_TEST_START }
}

export const EXPRESS_TEST_RESULTS = "EXPRESS_TEST_RESULTS";
export const expressTestResults = (data) => {
    return { type: EXPRESS_TEST_RESULTS, data }
}

export const EXPRESS_TEST_ERROR = "EXPRESS_TEST_ERROR";
export const expressTestError = (data) => {
    return { type: EXPRESS_TEST_ERROR, data }
}

export const EXPRESS_TEST = "EXPRESS_TEST";
export const expressTest = () => {
    return dispatch => {
        dispatch(expressTestStart());
        axios.get(`/api/express-test`)
            .then(res => dispatch(expressTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(expressTestError(err)))

    }
}

export const DB_TEST_START = "DB_TEST_START";
export const dbTestStart = () => {
    return { type: DB_TEST_START }
}
export const DB_TEST_RESULTS = "DB_TEST_RESULTS";
export const dbTestResults = (data) => {
    return { type: DB_TEST_RESULTS, data }
}
export const DB_TEST_ERROR = "DB_TEST_ERROR";
export const dbTestError = (data) => {
    return { type: DB_TEST_ERROR, data }
}

export const DB_TEST = "DB_TEST"
export const dbTest = () => {
    return dispatch => {
        dispatch(dbTestStart());
        axios.get(`/api/products`)
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}

//VCBC actions below
export const NO_AUTH = "NO_AUTH"
export const noAuth = () => {
    return { type: NO_AUTH }
}

export const AUTHED = "AUTHED"
export const auth = (data) => {
    return { type: AUTHED, data}
}

export const IS_REGISTERED = "IS_REGISTERED"
export const reg = (data) => {
    return { type: IS_REGISTERED, data}
}

//



//


export const login = (user) => {
    return dispatch => {
        console.log('action fired!', user.username);
        axios.post(`/api/user/login`,{userlogin: user})
        .then( res => {
          console.log('this is the auth response ',res);
          dispatch(auth(res.data))
        })

    }
}


export const register = (user) => {
    return dispatch => {

        console.log('register action fired!', user);
        axios.post(`/api/user/register`, {userreg: user})
        .then( res => {
          console.log('this is the response ',res.data.firstname);
          dispatch(reg(res.data))
        })

    }
}

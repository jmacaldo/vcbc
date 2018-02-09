import { EXPRESS_TEST_RESULTS, DB_TEST_RESULTS, EXPRESS_TEST_ERROR, DB_TEST_ERROR, NO_AUTH, AUTHED, IS_REGISTERED } from '../actions';

const initialState = {
    results: '',
    isAuthenticated: false,
    isRegistered: false,
    user: []
}

const demo = (state = initialState, action) => {
    switch (action.type) {
        case EXPRESS_TEST_RESULTS:
            return { ...state, results: "Test Succeeded!  " + action.data }
        case DB_TEST_RESULTS:
            return { ...state, results: "Test Succeeded!  " + action.data }
        case EXPRESS_TEST_ERROR:
            return { ...state, results: "Test Failed!  " + action.data }
        case DB_TEST_ERROR:
            return { ...state, results: "Test Failed!  " + action.data }
        case NO_AUTH:
            return { ...state, isAuthenticated: false }
        case AUTHED:
            return { ...state, user: action.data, isRegistered: true, isAuthenticated: true }
        case IS_REGISTERED:
            return { ...state, user: action.data, isRegistered: true, isAuthenticated: false }
        default:
            return state
    }
}

export default demo;

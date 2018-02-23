import { EXPRESS_TEST_RESULTS, DB_TEST_RESULTS, EXPRESS_TEST_ERROR, DB_TEST_ERROR, NO_AUTH, AUTHED, IS_REGISTERED, RECIPE_FIND_ALL, ACTIVATE_MAIN, ACTIVATE_REG, ACTIVATE_SUBMIT, ACTIVATE_TOOLS, RECIPE_FOCUS, COMMENTS } from '../actions';

const initialState = {
    results: '',
    isAuthenticated: false,
    isRegistered: false,
    user: [],
    recipe: [],
    ingredients: [],
    allrecipes:[],
    isMainActivated: true,
    isRegActivated: false,
    isSubmitActivated: false,
    isToolscActivated: false,
    isLoading: true,
    recipeFocus: [],
    isFocusActivated: false,
    diagOpen: false,
    comments: []

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
            return { ...state, user: action.user, isMainActivated: true, isRegistered: true, isAuthenticated: true, isRegActivated: false}
        case IS_REGISTERED:
            return { ...state, user: action.user, isRegistered: true, isAuthenticated: false, recipeSubmitted: false }
        case RECIPE_FIND_ALL:
            return { ...state, allrecipes: action.allrecipes, isLoading: false, recipeFocus: action.detail}
        case ACTIVATE_MAIN:
            return { ...state, isMainActivated: true, isRegActivated: false, isSubmitActivated: false, isToolscActivated: false, isFocusActivated: false}
        case ACTIVATE_REG:
            return { ...state, isMainActivated: false, isRegActivated: true, isSubmitActivated: false, isToolscActivated: false, isFocusActivated: false}
        case ACTIVATE_SUBMIT:
            return { ...state, isMainActivated: false, isRegActivated: false, isSubmitActivated: true, isToolscActivated: false, isFocusActivated: false}
        case ACTIVATE_TOOLS:
            return { ...state, isMainActivated: false, isRegActivated: false, isSubmitActivated: false, isToolscActivated: true, isFocusActivated: false}
        case RECIPE_FOCUS:
            return { ...state, isMainActivated: false, isRegActivated: false, isSubmitActivated: false, isToolscActivated: false, isFocusActivated: true, recipeFocus: action.detail}
        case COMMENTS:
            return {...state, comments: action.comments}
        default:
            return state
    }
}

export default demo;

import { EXPRESS_TEST_RESULTS, DB_TEST_RESULTS, EXPRESS_TEST_ERROR, DB_TEST_ERROR, NO_AUTH, AUTHED, IS_REGISTERED, RECIPE_FIND_ALL, ACTIVATE_MAIN, ACTIVATE_REG, ACTIVATE_SUBMIT, ACTIVATE_TOOLS, RECIPE_FOCUS, COMMENTS, FOOD2FORK, EDAMAM, EDAMAM_FOCUS, USER_PROFILE,RECIPE_IN_PROFILE } from '../actions';

const initialState = {
    results: '',
    isAuthenticated: false,
    isRegistered: false,
    user: [],
    recipe: [],
    ingredients: [],
    allrecipes:[],
    recipeFocus: [],
    comments: [],
    edamam: [], /* this is the state for api search result*/
    edamamfocus: [], /*state for api recipe focus*/
    profile: [],
    recipeinprofile: []

}

const demo = (state = initialState, action) => {
    switch (action.type) {
        case NO_AUTH:
            return { ...state, isAuthenticated: false, isRegistered: false }
        case AUTHED:
            return { ...state, user: action.user, isMainActivated: true, isRegistered: true, isAuthenticated: true, isRegActivated: false}
        case IS_REGISTERED:
            return { ...state, user: action.user, isRegistered: true, isAuthenticated: false, recipeSubmitted: false }
        case RECIPE_FIND_ALL:
            return { ...state, allrecipes: action.allrecipes}
        case RECIPE_FOCUS:
            return { ...state,  recipeFocus: action.detail}
        case COMMENTS:
            return {...state, comments: action.comments}
        case EDAMAM: /*case for api search result*/
            return {...state, edamam: action.edamam}
        case EDAMAM_FOCUS: /*case for api recipe in focus*/
            return {...state,  edamamfocus: action.detail}
        case USER_PROFILE:
            return {...state,  profile: action.user}
        case RECIPE_IN_PROFILE:
            return {...state,  recipeinprofile: action.recipes}

        default:
            return state
    }
}

export default demo;

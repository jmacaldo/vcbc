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
export const auth = (user) => {
    return { type: AUTHED, user}
}

export const IS_REGISTERED = "IS_REGISTERED"
export const reg = (data) => {
    return { type: IS_REGISTERED, data}
}

export const RECIPE_SUBMITTED = "RECIPE_SUBMITTED"
export const recipesubmit = (data) => {
    return { type: RECIPE_SUBMITTED, data }
}

export const INGREDIENTS_SUBMITTED = "INGREDIENTS_SUBMITTED"
export const ingredientsubmit = (ingredient, recipe) => {
    return { type: INGREDIENTS_SUBMITTED, ingredient , recipe}
}

export const RECIPE_FIND_ALL = "RECIPE_FIND_ALL"
export const recipefindall = (allrecipes) => {
    return { type: RECIPE_FIND_ALL, allrecipes}
}

export const RECIPE_FOCUS = "RECIPE_FOCUS"
export const recipefocus = (detail) => {
    return { type: RECIPE_FOCUS, detail}
}



//menu navigation handlers
export const ACTIVATE_MAIN = "ACTIVATE_MAIN"
export const ACTIVATE_REG = "ACTIVATE_REG"
export const ACTIVATE_SUBMIT = "ACTIVATE_SUBMIT"
export const ACTIVATE_TOOLS = "ACTIVATE_TOOLS"


//login authentication
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

//register a user
export const register = (user) => {
    return dispatch => {
        axios.post(`/api/user/register`, {userreg: user})
        .then( res => {
          dispatch(reg(res.data))
        })
    }
}

//submit a recipe
export const submitrecipe = (recipe, id) => {
    return dispatch => {
        axios.post(`/api/recipe/submit`, {recipe: recipe, id: id})
        .then( res => {
          dispatch(recipesubmit(res.data))
        })
    }
}

//submit an ingredient to the DB and return current
//list of ingredients for the active recipe
export const submitingredient = (ingredient, recipe) => {
    return dispatch => {
      axios.post(`/api/recipe/ingredient`, {ingredient: ingredient, id: recipe.id})
      .then( res => {
        axios.post(`/api/recipe/findbyid`, {id: recipe.id})
        .then(res => {
          dispatch(ingredientsubmit(res, recipe))
        })
      })
    }
}

//findall recipes for display to the main page
export const allrecipes = () => {
    return dispatch => {
        axios.post(`/api/recipe/findall`)
        .then( res => {
           dispatch(recipefindall(res.data))
        })
    }
}

//find the one recipe labed as 'recipe of the week'
export const detail = (detail) => {
  return dispatch => {
      dispatch(recipefocus(detail))
  }
}

export const loginbtn =()=> {
  return { type: ACTIVATE_MAIN}
}

export const registerbtn =()=> {
  return {type: ACTIVATE_REG}
}

export const submitbtn =()=> {
  return {type: ACTIVATE_SUBMIT}
}

export const toolsbtn =()=> {
  return {type: ACTIVATE_TOOLS}
}

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

export const COMMENTS = "COMMENTS";
export const commentsfetch = (comments) => {
  return { type: COMMENTS, comments}
}
export const commentsupdate = (comments) => {
  return { type: COMMENTS, comments}
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

export const EDAMAM_FOCUS = "EDAMAM_FOCUS"
export const edamfocustoprops = (detail) => {
    return { type: EDAMAM_FOCUS, detail}
}

export const FOOD2FORK = "FOOD2FORK"
export const f2fdata = (f2fres) => {
    return { type: FOOD2FORK, f2fres}
}

export const EDAMAM = "EDAMAM"
export const edamamdata = (edamam) => {
    return { type: EDAMAM, edamam}
}

export const logoutUser = () => {
    return { type: NO_AUTH }
}

export const SET_FAVE_TRUE = "SET_FAVE_TRUE"
export const setFaveTrue = () => {
  return {type: SET_FAVE_TRUE }
}

export const SET_FAVE_FALSE = "SET_FAVE_FALSE"
export const setFaveFalse = () => {
  return {type: SET_FAVE_FALSE }
}


//load a user profile to state
export const USER_PROFILE = "USER_PROFILE"
export const loaduserprofile = (user) => {
    return { type: USER_PROFILE, user}
}

//load recipes in profile
export const RECIPE_IN_PROFILE = "RECIPE_IN_PROFILE"
export const loadrecipeinprofile = (recipes) => {
    return { type: RECIPE_IN_PROFILE, recipes}
}

//set user local faves in to state
export const LOAD_LOCAL_FAVES = "LOAD_LOCAL_FAVES"
export const localfavetostate = (recipes) => {
    return { type: LOAD_LOCAL_FAVES, recipes}
}



//menu navigation handlers
export const ACTIVATE_MAIN = "ACTIVATE_MAIN"
export const ACTIVATE_REG = "ACTIVATE_REG"
export const ACTIVATE_SUBMIT = "ACTIVATE_SUBMIT"
export const ACTIVATE_TOOLS = "ACTIVATE_TOOLS"


//login authentication
export const login = (user) => {
    return dispatch => {
        axios.post(`/api/user/login`,{userlogin: user})
        .then( res => {
          dispatch(auth(res.data))
        })

    }
}

//filename global var
var avatarimgarr=[]
var recipeimgarr=[]


//register a user
export const register = (user) => {
    return dispatch => {
        axios.post(`/api/user/register`, {userreg: user, img:avatarimgarr[0]})
        .then( res => {
          dispatch(reg(res.data))
        })
    }
}


export const avatarimg =(filename) =>{
   avatarimgarr.push(filename)
   console.log('this is the filename');
   console.log(avatarimgarr[0]);
  return dispatch => {
  }
}

export const recipeimg =(filename) =>{
   recipeimgarr.push(filename)
   console.log('this is the filename');
   console.log(recipeimgarr[0]);
  return dispatch => {
  }
}



//submit a recipe
export const submitrecipe = (recipe, id,img) => {
  console.log(id);
    return dispatch => {
        axios.post(`/api/recipe/submit`, {recipe: recipe, id: id, img:recipeimgarr[0]})
        .then( res => {
          dispatch(recipesubmit(res.data))
        })
        axios.post(`/api/recipe/findall`)
        .then(res => {
           dispatch(recipefindall(res.data))
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

//find a user recipe by its id
export const findbyid = (id) => {
    return dispatch => {
      axios.post(`/api/recipe/findbyid`, {id: id})
      .then(res => {
      console.log(res);
      dispatch(recipefocus(res.data[0]))
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
    console.log('action')
    console.log(detail);
      dispatch(recipefocus(detail))
  }
}

//edamam recipe detail action
export const edamamfocus = (detail) => {
  return dispatch => {
      dispatch(edamfocustoprops(detail))
  }
}

//these relate to nav buttons
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

//fetch comments for a recipe that has been brought to focus
export const findcommentsbyrecipe = (id) => {
  console.log(id);
  return dispatch => {
      axios.post(`/api/comments/findbyrecipe`, {id: id})
      .then( res => {
         dispatch(commentsfetch(res.data))
      })
  }
}

//fetch comments for an edamam recipe that has been brought to focus
export const findedamamcomments = (uri) => {
  console.log('eda comments', uri);
  return dispatch => {
      axios.post(`/api/comments/findbyuri`, {edamam_uri: uri})
      .then( res => {
        console.log(res.data);
         dispatch(commentsfetch(res.data))
      })
  }
}

//submit a recipe comment to the db and then update state with new comment
export const submitComment = (comment, recipeid, userid, rating) => {
  return dispatch => {
    console.log('regular comment fired');
      axios.post(`/api/comments/submit`, {comment: comment, recipeid: recipeid, userid: userid, rating: rating})
      .then( res => {
        axios.post(`/api/comments/findbyrecipe`, {id: recipeid})
        .then( res => {
           dispatch(commentsfetch(res.data))
        })
      })
  }
}

//submit a recipe comment for edamam recipes
export const submitCommentEdamam = (comment, uri, userid, rating) => {
  return dispatch => {
    console.log('eda comment fired', rating);
      axios.post(`/api/comments/edamamcomment`, {comment: comment, recipeid: uri, userid: userid, rating: rating})
      .then( res => {
        axios.post(`/api/comments/findbyuri`, {edamam_uri: uri})
        .then( res => {
           dispatch(commentsfetch(res.data))
        })
      })
  }
}

//file upload function
export const uploader =(file)=>{
  console.log('action: '+file);
  return dispatch => {
    axios.post(`/api/uploader/image`, {file: file})
  }
}

//fetch from food2fork api
export const apifetch =() =>{
  return dispatch => {
    axios.post(`http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=6cfda056065ed767b704fafacbf33198&q=vegan`)
    .then (res =>{
      dispatch(f2fdata(res.data))
    })
  }
}

//fetch from edamam api
export const edamam =(search) =>{
  return dispatch => {
    axios.post(`https://api.edamam.com/search?q=${search}&health=vegan&to=40&app_id=8c9d8719&app_key=4b681450874f79b4c4c8c72508248109`)
    .then (res =>{
      dispatch(edamamdata(res.data.hits))
    })
  }
}

//fetch specific recipe based on uri search
export const edamamurisearch =(search) =>{
  return dispatch => {
    console.log(search);
    axios.post(`https://api.edamam.com/search?r=${search}&app_id=8c9d8719&app_key=4b681450874f79b4c4c8c72508248109`)
    .then (res =>{
      console.log(res);
      dispatch(edamfocustoprops(res.data[0]))
    })
  }
}

//load user profile based on URL route
export const loadUser =(username) =>{
  return dispatch => {
    axios.post(`/api/user/findByUsername`, {username: username})
    .then(res => {
      dispatch(loaduserprofile(res.data))
      axios.post(`/api/localFaves/loadfaves`, {id: res.data.id })
      .then(res => {
        dispatch(localfavetostate(res.data))
        console.log('faves');
        console.log(res);
      })
      axios.post(`/api/recipe/findbyuserid`, {id: res.data.id})
      .then(res => {
        dispatch(loadrecipeinprofile(res.data))
      })
      // .then(res => {
      // //  console.log(res.data);
      // //  axios.post(`api/localFaves/userLocalFaves`, {id: res.data.id })
      //   //console.log(res.data);
      // })

    })
  }
}

//go to external recipe website
export const goToExternal =(url) =>{
  return dispatch => {
    axios.get(url)
  }
}

export const searchHandle =(query) =>{
  return dispatch => {
    axios.post(`/api/redirect`, {query:query})
  }
}

//set a local recipe as a favorite
export const localFave =(user, recipe) =>{
  return dispatch => {
  axios.post(`/api/localFaves`, {user:user, recipe:recipe})
  .then(res => {
    dispatch(setFaveTrue())
  })
  }
}

//set an api recipe as a favorite
export const faveApi =(user, recipe, label, image) =>{
  return dispatch => {
    console.log(user,recipe,label,image);
  axios.post(`/api/apiFaves`, {
    user:user,
    recipe:recipe,
    label: label,
    image: image})
  }
}

export const faveFalse = ()=>{
  return dispatch => {
    console.log('unmount fired!');
    dispatch(setFaveFalse())
  }
}

//check whether a local recipe is a fave
export const isLocalFave =(user, recipe) =>{
  console.log('local fave', user, recipe);
  return dispatch => {
  axios.post(`/api/localFaves/isLocalFave`, {user:user, recipe:recipe})
  .then(res => {

    if (res.data.id >= 1) {
      console.log('fave found');
      console.log(res.data);
      dispatch(setFaveTrue())
    } else {
      console.log('no fave found');
      console.log(res.data);

    }
  })
  }
}

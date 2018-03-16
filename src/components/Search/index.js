import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class Search extends Component {


  clickHandler(value){
    window.location = `/recipe/`+value.value;
  }

  apiHandler(value){

    window.location = `/api/`+value.value;
  }

  searchHandle(query){
    //this.props.actions.searchHandle(query)
     window.location = `/search/`+query;

  }


  render() {


    let edamamres = []
    let edaarr = this.props.edamam

    if (edaarr){
      for(let j = 0; j <= (edaarr.length-1); j++) {
       edamamres.push({text: edaarr[j].recipe.label, value:edaarr[j].recipe.uri } )
      }
    }

    const appendRes = () => {
      if(this.props.allrecipes){
        return this.props.allrecipes.map((object,index) => {
          return (
            {text: object.title, value:object.id }
          )
        })
      }
    }



    const appendEda = () => {
      if(this.props.edamam){
        return this.props.edamam.map((object,index) => {
          return (
            {text: object.recipe.label , value: object.recipe.uri }
          )
        })
      }
    }


    return (
      <div>
        <AutoComplete
          hintText="Search thousands of delicious plant-based recipes"
          dataSource={appendEda()}
          floatingLabelText=""
          style={styles.autoComplete}
          fullWidth={true}
          onNewRequest={(searchText) => this.searchHandle(searchText)}
        />
      </div>
    );
  }
}

const styles = {
  autoComplete: {
    // padding: '30px',

  }
}

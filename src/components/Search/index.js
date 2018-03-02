import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class Search extends Component {



  render() {
    let search = [];
    let allrecipes = this.props.allrecipes
    for(let i = 0; i <= (allrecipes.length-1); i++) {
     search.push(allrecipes[i].title)
    }
    return (
      <div>
        <AutoComplete
          hintText="Search thousands of delicious plant-based recipes"
          dataSource={search}
          floatingLabelText=""
          fullWidth={true}
        />
      </div>
    );
  }
}

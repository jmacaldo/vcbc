import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class Search extends Component {

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {

    let search = [];
    let allrecipes = this.props.allrecipes
    for(let i = 0; i <= (allrecipes.length-1); i++) {
     search.push(allrecipes[i].title)
    }


    return (
      <div>

        <AutoComplete
          hintText="Search for a recipe"
          dataSource={search}
          floatingLabelText=""
          fullWidth={true}
        />
      </div>
    );
  }
}

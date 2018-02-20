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
    return (
      <div>

        <AutoComplete
          hintText="Search for a recipe"
          dataSource={this.props.data}
          floatingLabelText=""
          fullWidth={true}
        />
      </div>
    );
  }
}

import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import React, {Component} from 'react';





const dataSource1 = [
  {
    text: 'text-value1',
    value: (
      <MenuItem
        primaryText="text-value1afafa"
        secondaryText="&#9786;"
        value='23'
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
        value='24'
      />
    ),
  },
];

const dataSource2 = ['12345', '23456', '34567'];

const dataSource3 = [
  {textKey: 'Some Text', valueKey: 'someFirstValue'},
  {textKey: 'Some Text', valueKey: 'someSecondValue'},
];
const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

/**
 * The first example has `MenuItem`s in its data source that display on data entry.
 * The second example uses an array of values as its `dataSource`, and updates on focus.
 * Both examples have filtering disabled.
 */
export default class AutoCompleteExampleDataSource extends Component  {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }


  clickHandler(value){
    console.log('this is a test');
    window.location = `/recipe/`+value;
  }

render() {
  return (
  <div>
    <AutoComplete
      hintText="text-value data"
      filter={AutoComplete.noFilter}
      dataSource={dataSource1}
      onNewRequest={() => this.clickHandler()}
    /><br />
    <AutoComplete
      floatingLabelText="showAllItems"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource2}
    /><br />
    <AutoComplete
      floatingLabelText="Same text, different values"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource3}
      dataSourceConfig={dataSourceConfig}
    />
  </div>
)
  }

};

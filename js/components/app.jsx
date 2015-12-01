var React = require('react');
var ItemForm = require('./itemForm.jsx');
var ItemList = require('./itemList.jsx');
var ItemFilter = require('./itemFilter.jsx');
var itemCollection = require('../collections/items.js');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      items: this.props.items.toJSON()
    }
  },
  _handleRender: function (collection) {
    this.setState({
      items: collection
    });
  },
  render: function () {
    return (
      <div>
        <h1>todos</h1>
        <ItemForm items={this.state.items} handleRender={this._handleRender} />
        <ItemList items={this.state.items} handleRender={this._handleRender} />
      </div>
    )
  }
});
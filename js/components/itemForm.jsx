var React = require('react');
var itemModel = require('../models/item');
var itemCollection = require('../collections/items');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      value: ''
    };
  },
  _handleChange: function (e) {
    this.setState({
      value: e.target.value
    });
  },
  _handleSubmit: function (e) {
    e.preventDefault();
    var props = this.props;
    var that = this;
    var model = new itemModel();
    var collection = new itemCollection(this.props.items);

    model.set({
      item: this.state.value,
      status: 'active'
    });
    model.save({}, {
      success: function (item) {
        that.setState({
          value: ''
        });
        collection.add(item);
        props.handleRender(collection.toJSON());
      }
    })
  },
  render: function () {
    return (
      <form onSubmit={this._handleSubmit}>
        <input onChange={this._handleChange} value={this.state.value} type="text" name="todoInput" placeholder="What needs to be done?" />
        <button type="submit">Submit</button>
      </form>
    )
  }
})
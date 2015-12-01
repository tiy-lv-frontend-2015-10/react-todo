var React = require('react');
var itemCollection = require('../collections/items');

module.exports = React.createClass({
  getInitalState: function () {
    return {
      active: [],
      completed: []
    }
  },
  _filterAll: function(e) {
    this.props.handleFilter();
  },
  _filterActive: function (e) {
    this.props.handleFilter('active');
  },
  _filterCompleted: function (e) {
    this.props.handleFilter('completed');
  },
  render: function () {
    return (
      <div className="filter">
        <p className="count">{this.props.itemsLeft} items left</p>
        <ul>
          <li><a onClick={this._filterAll} href="#">All</a></li>
          <li><a onClick={this._filterActive} href="#">Active</a></li>
          <li><a onClick={this._filterCompleted} href="#">Completed</a></li>
        </ul>
      </div>
    )
  }
})
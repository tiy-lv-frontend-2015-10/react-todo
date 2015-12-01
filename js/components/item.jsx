var React = require('react');
var itemCollection = require('../collections/items');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      isChecked: this.props.status === 'completed',
      status: this.props.status === 'completed' ? 'completed' : 'active'
    };
  },
  _handleChange: function (e) {
    var collection = new itemCollection(this.props.items);
    var item = collection.get(this.props.objectId);
    var isCompleted = !this.state.isChecked;

    this.setState({
      isChecked: !this.state.isChecked,
      status: isCompleted ? 'completed' : 'active'
    });

    item.set({
      status: isCompleted ? 'completed' : 'active'
    });

    item.save()
  },
  _delete: function () {
    var collection = new itemCollection(this.props.items);
    var item = collection.get(this.props.objectId);
    var props = this.props;

    item.destroy({
      success: function () {
        props.handleRender(collection.toJSON());
      }
    });
  },
  render: function () {
    return (
      <li>
        <input onChange={this._handleChange} type="checkbox" id={this.props.objectId} checked={this.state.isChecked} />
        <label className={this.state.status} htmlFor={this.props.objectId}>{this.props.item}</label>
        <button className="delete" onClick={this._delete}>Delete</button>
      </li>
    );
  }
});
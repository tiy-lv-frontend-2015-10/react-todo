var React = require('react');
var Item = require('./item.jsx');

module.exports = React.createClass({

  render: function () {
    var props = this.props;
    return (
      <ul id="itemList">
        {this.props.items.map(function(item){
          return <Item handleRender={props.handleRender} items={props.items} key={item.objectId} objectId={item.objectId} item={item.item} status={item.status} />
        })}
      </ul>
    )
  }
})
require('../css/main.css');
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.jsx');
var itemCollection = require('./collections/items');

var collection = new itemCollection();

collection.fetch({
  success: function (items) {
    ReactDOM.render(<App items={items} />, document.getElementById('container'));
  }
});
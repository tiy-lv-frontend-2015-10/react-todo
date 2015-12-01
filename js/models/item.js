var Backbone = require('../backbone-parse');

module.exports = Backbone.Model.extend({
  validate: function (attrs, options) {
    if (attrs.item === '') {
      console.error("Item must not be empty");
      return "Item must not be empty";
    }
    if (attrs.status !== 'active' && attrs.status !== 'completed') {
      console.error("Invalid Status");
      return "Invalid status";
    }
  },
  _parse_class_name: 'item'
});
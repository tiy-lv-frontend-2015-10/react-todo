var Backbone = require('../backbone-parse');
var itemModel = require('../models/item');

module.exports = Backbone.Collection.extend({
  model: itemModel,
  _parse_class_name: 'item'
})
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var DataButton = Backbone.Model.extend({
  defaults: {
    label: 'Submit'
  },
  initialize: function() {
    console.log('initialize');
  }
});


var DataCollection = Backbone.Collection.extend({
  model: DataButton,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts/',
});



module.exports = {
  'DataButton': DataButton,
  'DataCollection': DataCollection
};

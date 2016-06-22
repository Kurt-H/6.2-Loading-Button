var $ = require('jquery');
var DataCollection = require('./models/retrieval.js').DataCollection;


var dataLoad = new DataCollection();

console.log(dataLoad.get('label'));


$('#button-container').append('<button class="btn submit-btn"></button>');

//$('submit-btn').on('click', function(){
//==>change label to "Loading..."
//==>start fetch
//==>disable click
//})
// dataLoad.fetch().done(function(){
//==>return to default state
//==>add list of items to DOM
// }

$('#items-list-container').append('<ul class="items-list">test</ul>');

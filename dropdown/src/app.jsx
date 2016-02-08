var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a Dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};
//Ask React to Render this Class
var element = React.createElement(Dropdown, options);

//When we ask React to render this class, we will tell it where to
//place the rendered element in the DOM

ReactDOM.render(element,  document.querySelector('.target'));

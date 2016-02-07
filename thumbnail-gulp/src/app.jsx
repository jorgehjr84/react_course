var React = require('react');
var ThumbnailList = require('./thumbnail-list')


var options = {
  thumbnailData: [{
        title: "See Tutorials",
        number: 32,
        header: 'Learn React',
        description: 'React is an awesome JS library for making great dynamic pages',
        imageUrl: 'http://formatjs.io/img/react.svg'
      },{
        title: "See Tutorials",
        number: 25,
        header: 'Gulp',
        description: 'Gulp will speed up your development workflow',
        imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
          }]
}
//Ask React to Render this Class
var element = React.createElement(ThumbnailList, options);

//When we ask React to render this class, we will tell it where to
//place the rendered element in the DOM

ReactDOM.render(element,  document.querySelector('.target'));

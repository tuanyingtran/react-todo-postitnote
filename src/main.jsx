//Main entry point for application

var React = require('react');
var ReactDom = require('react-dom');
var PostedNote = require('./components/PostItNote.jsx');
var PostingWall = require('./components/PostingWall.jsx');


ReactDom.render (<PostingWall/>, 
                 document.getElementById('react-postitnote'));



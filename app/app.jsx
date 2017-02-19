var React    = require('react');
var ReactDOM = require('react-dom');

/* * * * * * * * * * * * * * * *
/* To Start With a new Project
/* * * * * * * * * * * * * * * */

// step 01: remove this line
var Greeter = require('Greeter');

// step 02: delete all files from components folder

// step 03: remove this line
var firstName = 'Hector';

// step 04: borrar codigo para demostrar stage-0
var objOne = {
        name : 'Hector',
    location : 'Mexico'
};

var objTwo = {
  age : 5,
  ...objOne
};

console.log(objTwo);

// step05: remove the refered component,
//         put another html tag instead:
//         for example:  <h1>Boilerplate</h1>
ReactDOM.render(
    <Greeter name={firstName}/>, document.getElementById('app')
);

'use strict';


import * as React from 'react';
import * as ReactDOM from 'react-dom';

//components!
import Welcome from "./components/welcome";
import Register from "./components/Register";
import Users from "./components/Users"



function App() {
    return (
        <div>
            <Welcome />
            <Users />
            <Register />
        </div>
    )
}

function render() {
  ReactDOM.render(<App />, document.getElementById( 'app' ));
//   ReactDOM.render( <h2>What kind of D do you need?</h2>, document.getElementById( 'app'
//    ) )
}


render();
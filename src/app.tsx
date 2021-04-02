import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    return (
        <div>
            <Welcome />
            <Register />
        </div>
    )
}
function Welcome( ) {
    return(
        <div>
<h1>🍆 Welcome to D-Down! 🍆</h1>
        </div>

    )
}
function Register () {
    function click(e: { preventDefault: () => void; }) {
        e.preventDefault()
        console.log( document.querySelector( '.form--register' ) )
    }
    return (
        <div>
            <h2>Looking to get/give that D?</h2>
            <form className="register form form--register">
            <input type="text" className="form__input form__input--register form__input--text" placeholder="username"/>
            <input type="text" className="form__input form__input--register form__input--text" placeholder="First Name"/>
            <input type="text" className="form__input form__input--register form__input--text" placeholder="Last Name"/>
            <input type="date" className="form__input form__input--register form__input--date" placeholder="birthday"/>
            <div>
                <h3>I would like to:</h3>
                <label htmlFor="give" className="form__label form__label--register form__label--checkbox">Give D!</label>
                <input type="checkbox" className="form__input form__input--register form__input--checkbox" id="give"/>
                <label htmlFor="receive" className="form__label form__label--register form__label--checkbox">Receive D!</label>
                <input type="checkbox" className="form__input form__input--register form__input--checkbox" name="" id="receive"/>

            </div>
            <button onClick={click}> Submit! </button>
            </form>
        </div>

    )
}



function render() {
  ReactDOM.render(<App />, document.getElementById( 'app' ));
//   ReactDOM.render( <h2>What kind of D do you need?</h2>, document.getElementById( 'app'
//    ) )
}
class User {
    userName: string;
    firstName: string;
    lastName: string;
    birthDay: Date;
}

render();
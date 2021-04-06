'use strict';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
const users: any[] = [];
class User {
    userName: string;
    firstName: string;
    lastName: string;
    birthDay: Date;
    give: any;
    receive: any;
    constructor (userName?: string, firstName?: string, lastName?: string, birthDay?: Date, give?: boolean, receive?: boolean){
        this.userName = userName
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.give = give;
        this.receive = receive;
    }
}



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
        let form = document.querySelector( '.form--register' )
        let formFields = form.querySelectorAll('input')
        let formData: any[] = [];
        formFields.forEach((item) => {
            let itemValue: any;
            if( item.value != undefined ) {
                if ( item.type != 'checkbox' && item.value != '' ) {
                    itemValue = item.value;
                    formData.push( itemValue );
                } else if ( item.type == 'checkbox' ) {
                    if( item.checked == true ) {
                        itemValue = true;
                        formData.push( itemValue );
                    } else {
                        itemValue = false;
                        formData.push(itemValue);
                    }
                } else {
                    itemValue = '';
                    formData.push( itemValue );
                }
            } else {
                itemValue = '';
                formData.push( itemValue )
            }
            return formData;
        })
        let newUser = new User(...formData);
        users.push(newUser);
        console.log(users);
        // form.reset();
        // console.log( ...formData );
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
                <input type="checkbox" className="form__input form__input--register form__input--checkbox" id="receive"/>

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


render();
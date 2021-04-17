import React from 'react';
import User from '../functions/functions';
const users = [];
function Register () {
    function click(e: { preventDefault: () => void; }) {
        e.preventDefault()
        const form = document.querySelector( '.form--register' )
        const formFields = form.querySelectorAll('input')
        const formData = [];
        formFields.forEach((item) => {
            let itemValue;
            if( item.value != undefined && itemValue != '' ) {
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
        const newUser = new User(...formData);
        users.push(newUser);
        console.log(users);
        // form.reset();
        // console.log( ...formData );
    }
    return (
        <div>
            <h2>Looking to get/give that D?</h2>
            <form className="register form form--register">
            <input type="text" required className="form__input form__input--register form__input--text" placeholder="username"/>
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

export default Register;
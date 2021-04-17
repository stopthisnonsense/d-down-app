import React from 'react';
// import User from '../functions/functions';
import {users} from "../variables/globals"

function UserComponent () {
    const UserComponents = users.map( (User) =>
    <div>UserName: {User.userName}
    First Name: {User.firstName}
    Last Name: {User.lastName}</div>
     )
    return <div>
        {UserComponents}
    </div>
}

function Users() {
    return <UserComponent/>
}

export default Users;
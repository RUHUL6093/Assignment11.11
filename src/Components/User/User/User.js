import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import UserHeader from '../UserHeader/UserHeader';

const User = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <UserHeader></UserHeader>
            <h1 className="App mt-5">Welcome {loggedInUser.name}</h1>
        </div>
    );
};

export default User;
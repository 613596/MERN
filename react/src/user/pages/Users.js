import React from 'react';

import UsersList from '../components/UserList';


const Users = () => {
    const USERS = [
        {
            id: "u1",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "Shyam Sundar Bhattarai",
            places: 5            
        }
    ];
    return (
        <UsersList items={USERS}/>
    );
}

export default Users;
import React from 'react'
import { useState } from 'react';

import UserListItem from './UserListItem';
const usersDb=[
    {
        "id": 1,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 2,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 3,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 4,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 5,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 6,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
  ]

  function UserList() {
    const [userState, setUserState]= useState(usersDb.map(u=>({ ...u,isSelected:false}))
    )
    function selectedUser(index){
        
        const usersCopy=[...userState];
         usersCopy[index]= {...userState[index], isSelected: !userState[index].isSelected}
         setUserState(usersCopy)
    }


    function removeUser(index){
     const usersCopy=[...userState];
     usersCopy.splice(index,1)
     setUserState(usersCopy)
    }

    function  mapUsers(u,index){
        return <UserListItem userEl={u} index={index} removeUser={removeUser} key={u.id} selectedUser={selectedUser} />

    }
    return <ul>{userState.map(mapUsers)}</ul>
   }

export default UserList








import axios from "axios";
import { useEffect, useState } from "react";

const STORAGE_KEY = 'usersList';

export function useUsersList(){
    const [UsersList, setUsersList] = useState([])
    //     ()=>{
    //     const storedusersList = localStorage.getItem(STORAGE_KEY);
    //     return storedusersList ? JSON.parse(storedusersList) : [];
    // })
    function addUser(user){
        setUsersList(prevList => [...prevList,user]);
    }
    function deleteUser(userId) {
      if (window.confirm("Are you sure you want to delete this user?")){
        axios.delete(`http://localhost:1337/users/${userId}`)
        .then(response => {
        console.log(response.data.message);
        window.location.reload();
        })
        .catch(error => {
        console.error('Error deleting user:', error);
        });
    }
        // const updatedUsersList = UsersList.filter(user => user.id !== userId);
        // localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUsersList));
        // setUsersList(updatedUsersList);
    }

    // useEffect(()=>{
    //     localStorage.setItem(STORAGE_KEY, JSON.stringify(UsersList));
    // }, [UsersList]); 

    useEffect(() => {
        axios.get('http://localhost:1337/users')
          .then(response => {
            setUsersList(response.data);
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      }, []);

    return {UsersList,addUser, deleteUser};

}
import axios from "axios";
import { useEffect, useState } from "react";

const STORAGE_KEY = 'usersList';

export function useUsersList(){
    const [UsersList, setUsersList] = useState([])

    function addUser(user){
        axios.post("http://localhost:1337/register", user)
        .then( response =>{
          if(response.data){
            console.log("user added successfully")
          }
        })
        .catch((err)=>{
        console.log("Error adding user:", err);
        })
      // setUsersList(prevList => [...prevList,user]);
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
    }
    

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

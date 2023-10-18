import './SectionUsers.css'
import {SectionWrapper, SectionHeader, AddUser, UserRow} from '../index'
// import UsersData from '../../data/UsersData';
import Button from 'react-bootstrap/Button';
import { useUsersList } from '../../hooks/useUsersList';
import { useState } from 'react';
import axios from 'axios';


function SectionUsers() {

    const {UsersList ,addUser, deleteUser} = useUsersList();

    let [Id, setId] = useState(1);

    const ScrollToAddUser = () => {
       const adduser = document.getElementById("adduser")
       if(adduser) {
        adduser.scrollIntoView({block: "end", inline: "nearest"});
       }
    }

    const handleOnDelete= (userId)=>{
        deleteUser(userId)
    }
    

    const users = UsersList.map( user => {
        return <UserRow
        key = {user.id}
        id = {Id++}  
        username = {user.username} 
        email = {user.email} 
        onDelete = {()=>{handleOnDelete(user.id)}}    
        />
    })

  return (
    <>
    <SectionWrapper>
        <SectionHeader>Users</SectionHeader>
        <div className='btn' id='addcourse'>
            <Button variant="primary" className='header-button' onClick={ScrollToAddUser}>Add Users</Button>
        </div>
        <div className='Users'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
        </div>
      </SectionWrapper>
      <SectionWrapper id="adduser">
        <SectionHeader>Add user</SectionHeader>
        <AddUser/>
      </SectionWrapper>
      </>
  )
}


export default SectionUsers;
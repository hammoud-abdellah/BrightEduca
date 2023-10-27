import './SectionUsers.css'
import {SectionWrapper, SectionHeader, AddUser, UserRow} from '../index'
import Button from 'react-bootstrap/Button';
import { useUsersList } from '../../hooks/useUsersList';
import { useState } from 'react';



function SectionUsers() {

    const {UsersList ,addUser, deleteUser} = useUsersList();
    let [Id, setId] = useState(1);
    const [searchInput, setSearchInput] = useState("");


    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };
    
    const filteredUsers = UsersList.filter((user) =>
         user.username.toLowerCase().includes(searchInput.toLowerCase()) || user.email.toLowerCase().includes(searchInput.toLowerCase())
    );

    const ScrollToAddUser = () => {
       const adduser = document.getElementById("adduser")
       if(adduser) {
        adduser.scrollIntoView({block: "end", inline: "nearest"});
       }
    }

    const handleOnDelete= (userId)=>{
        deleteUser(userId)
    }
    

    const users = filteredUsers.map( user => {
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
        <div className='container'>
            <form>
                <label className='searchLabel'>Search for a course:</label>&nbsp; &nbsp;
                <input className="searchInput"
                    placeholder='Search'
                    type='text'
                    value={searchInput}
                    onChange={handleSearchChange}
                />
            </form>
            <div className='btn' id='addcourse'>
                <Button variant="primary" className='header-button' onClick={ScrollToAddUser}>Add Users</Button>
            </div>
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
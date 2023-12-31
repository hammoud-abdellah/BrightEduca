import { useEffect, useState } from 'react'
import './AddUser.css'
import { useUsersList } from '../../hooks/useUsersList';


function AddUser() {
  const {UsersList ,addUser, deleteUser} = useUsersList();
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e)=>{
      // e.preventDefault();

      const newUser = {
        username: UserName,
        email: Email,
        password:Password,
      }
      addUser(newUser);
      setUserName("");
      setEmail("");
      setPassword("");
  }
  useEffect(()=>{
    console.log("updated users list: ", UsersList)
  },[UsersList])


  return (
    <form id='adduser' className='add-user-form' onSubmit={handleSubmit}>
         <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example1">User Name:</label>
            <input type="text"  className="form-control form-input" 
            value={UserName}
            onChange={(e)=>{
              setUserName(e.target.value);
            }}
            required />     
        </div>
        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example1">Email:</label>
            <input type="email"  className="form-control form-input" 
            alue={Email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            required/>     
        </div>
        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example1">Password:</label>
            <input type="password"  className="form-control form-input" 
            alue={Password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            required/>     
        </div>
        
        <div className='button'>
            <button type='submit' className='Add-button'>Add the user</button>
        </div>
    </form>
  )
}

export default AddUser

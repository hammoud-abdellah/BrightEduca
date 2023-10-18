import React from 'react'
import './UserRow.css'
import PropTypes from 'prop-types';
import axios from 'axios';

function UserRow(props) {
    UserRow.propTypes = {
        id : PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired,
    }

    const handleDeleteUser = () => {
        
        }
    
     return (
    
      <tr>
            <th scope="row">{props.id}</th>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>
                <button className='user-btns btn1'>Edit</button>
            </td>
            <td>   
                <button className='user-btns btn2' onClick={props.onDelete}>Delete</button>
            </td>
      </tr>
    
  )
}

export default UserRow

import { useContext, useEffect, useState } from 'react';
import { HeaderProfile } from '../../Components/Header/Header'
import {SectionCourses, SectionUsers } from '../../Components/index'

import './AdminProfile.css'
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';
import Signin from '../Signin/Signin';


function AdminProfile() {
   const initialSelectedLink = localStorage.getItem('selectedLink') || 'courses';
   let [Selectedlink, setSelectedlink] = useState(initialSelectedLink);
   const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

   const handleNavLinkClick = (link) => {
      setSelectedlink(link);
      localStorage.setItem('selectedLink', link);
   };
   useEffect(()=>{
     localStorage.setItem('selectedLink',Selectedlink)
   },[Selectedlink])


  return (
    <>
        {isAuthenticated? <div className='profile-container'>
          <HeaderProfile/>
          <header className='Admin-header'>
           <Nav defaultActiveKey={`/${Selectedlink}`} as="ul" className='header-list'>
             <Nav.Item as="li">
               <NavLink  activeclassname="active-link" className="nav-link" onClick={() => handleNavLinkClick("courses")}>Courses</NavLink>
             </Nav.Item>
            
             <Nav.Item as="li">
               <NavLink  activeclassname="active-link" className="nav-link" onClick={() => handleNavLinkClick("users")}>Users</NavLink>
             </Nav.Item>
           </Nav>
          </header>
          {Selectedlink === "courses" ? 
          <SectionCourses/> : <SectionUsers/>
          }
        </div>:
        <Signin/>
        }
    </>
  )
}

export default AdminProfile

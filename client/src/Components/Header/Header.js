import "./Header.css"


import {FaSearch} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'

import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";


function HeaderHome () {
    // window.addEventListener('scroll', function() {
    //     const header = document.getElementById('fixed-header');
    //     const scrollY = window.scrollY;
    
    //     if (scrollY >0) { 
    //         header.style.position = 'fixed';
    //         header.style.top = '0';
    //     } else {
    //         header.style.position = 'static';
    //     }
    // });

    const ScrollTocourses = () => {
        const courses = document.getElementById("courses")
        if(courses) {
         courses.scrollIntoView({block: "end", inline: "nearest"});
        }
     }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top" id="fixed-header">
            <div className="container">
                <a className="navbar-brand smoothScroll" href="/">BrightEduca</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                       <a className="nav-link" href="/">Home</a>
                    </li> 
                    <li className="nav-item">
                       <a className="nav-link" href="#courses" id="#courses" onClick={ScrollTocourses}>Courses</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="#aboutus">About Us</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="/Signup">SignUp</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>


  )
}

function HeaderProfile(){
    const navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const Logout = (e) => {
        e.preventDefault();
        setIsAuthenticated(false);
        localStorage.setItem("isLogged", false);
        navigate("/");
      };
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top" id="fixed-header">
            <div className="container">
                <a className="navbar-brand smoothScroll" href="/">BrightEduca</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto"> 
                    <li className="nav-item">
                       <button className="btn btn-danger" onClick={Logout}>Log out</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderHome;
export {HeaderProfile};

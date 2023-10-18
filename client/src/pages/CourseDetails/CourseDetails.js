import './CourseDetails.css'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderProfile } from '../../Components';

function CourseDetails() {
  const navigate = useNavigate();
  useEffect(()=>{
    const isAuthenticated = localStorage.getItem("isLogged");

    if(!isAuthenticated){
      navigate("/Signin");
    }

  })
  

  const coursePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXneM4yA7cGoa_1Ff0wJHoFLp2-YIJPEVZQg&usqp=CAU"
  const courseContent = [
    "Introduction to HTML",
    "HTML Forms and Input Elements",
    "Styling with CSS",
    "Responsive Web Design",
    // Add more topics as needed
  ];

  const courseGoals = [
    "Learn how to create web pages using HTML and CSS.",
    "Understand the fundamentals of responsive web design.",
    "Build a strong foundation in web development.",
    // Add more goals as needed
  ];

  const handleDownload = () => {
    window.location.href = "https://drive.google.com/drive/folders/13hYyxkr8W4wfy-EkrLnr594pxQOMj6jy";
  };
  
  return (
    <div className='course-detail-main'>
      <HeaderProfile/>
      <div className="banner">
        <div className="container">
          <div className="row">
              <div className="col-sm-5">
                  <h1 className='course-title display-4 fw-bold'>Web Development with HTML and CSS</h1>
                  <p className='course-text'>Dive into the world of web development with hands-on experience in HTML and CSS.</p>
                  <button className="btn-Download btn-success" onClick={handleDownload}>Download</button>
              </div>
              <div className="col-sm-7">
                  <img className="img-fluid" src={coursePicture} alt=""/>
              </div>
          </div>
        </div>
      </div>
      <div className='course-goal'>
      <h1>Course Goals</h1>
        <ul>
          {courseGoals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>
      <div className='course-content'>
      <h1>Course Content</h1>
        <ul>
          {courseContent.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      </div>
      <br/>
      <br/>
    </div>
  )
}

export default CourseDetails

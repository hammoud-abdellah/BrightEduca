import React from 'react'
import './Courses.css'
import CardCourse from '../CardCourse/CardCourse'


function Courses() {
  return (
    <section className='courses-section'>
        <div className='courses-title'>
            <h1>Our Popular Courses</h1>
        </div>
        <div className='Courses-cards'>
            <CardCourse 
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXneM4yA7cGoa_1Ff0wJHoFLp2-YIJPEVZQg&usqp=CAU" 
              title="Web Development with HTML and CSS"
              about="Dive into the world of web development with hands-on experience in HTML and CSS."  
              />
            <CardCourse
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1ZjPEEj5CCTDgoQG0hf3EUoDlCpEh7E3zA&usqp=CAU" 
              title="Business English Communication"
              about="Enhance your English communication skills in a business context with real-world scenarios." 
            />
            <CardCourse
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaAbJD_uW2gM1ukZcnfVepwrIXzyo63TaNg&usqp=CAU" 
              title="Stress Management Techniques"
              about="Learn strategies to effectively manage and cope with stress in both personal and professional life." 
            />
             <CardCourse
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaAbJD_uW2gM1ukZcnfVepwrIXzyo63TaNg&usqp=CAU" 
              title="Stress Management Techniques"
              about="Learn strategies to effectively manage and cope with stress in both personal and professional life." 
            />
        </div>
        <div className='discover-button'>
            <a href='/Student'>Discover All Courses</a>
        </div>
          
    </section>
  )
}

export default Courses

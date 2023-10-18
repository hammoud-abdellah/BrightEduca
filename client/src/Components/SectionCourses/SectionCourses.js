import './SectionCourses.css'
import {SectionWrapper, SectionHeader,CourseAdmin, AddCourse} from '../index'
import Button from 'react-bootstrap/Button';
import { useCoursesList } from '../../hooks/useCoursesList';




function SectionCourses() {

  const ScrollToAddCourse = () => {
    const addcourse = document.getElementById("addcourse")
    if(addcourse) {
     addcourse.scrollIntoView({block: "start", inline: "nearest"});
    }
  }


  const {CoursesList, addCourse, deleteCourse } = useCoursesList();

  const handleDeleteCourse = (courseId) => {
    deleteCourse(courseId)
  }
  
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Courses</SectionHeader>
        <div className='btn'>
            <Button variant="primary" className='header-button' onClick={ScrollToAddCourse}>Add course</Button>
        </div>
        <div className='courses'>
          {CoursesList.map(course => (
            <CourseAdmin 
            key={course.id} 
            image={course.image} 
            title={course.title} 
            about={course.about}
            onDelete={() => handleDeleteCourse(course.id)}/>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper id="addcourse">
        <SectionHeader>Add course</SectionHeader>
        <AddCourse/>
      </SectionWrapper>
    </>
  )
}

export default SectionCourses

import './StudentCourses.css'


import {SectionWrapper, SectionHeader,CardCourse} from '../index'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useCoursesList } from '../../hooks/useCoursesList';



function StudentCourses() {
  const {CoursesList, addCourse, deleteCourse } = useCoursesList();


  const courses = CoursesList.map( course =>{
    return <CardCourse key = {course.id} image={course.image} title={course.title} about={course.about} />
  });


  return (
    <SectionWrapper>
        <SectionHeader>Courses</SectionHeader>
        <DropdownButton id="dropdown-basic-button" title="Categories">
            <Dropdown.Item href="#/action-1">Software</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Languages</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Soft Skills</Dropdown.Item>
        </DropdownButton>
        <div className='courses'>
          {courses}
        </div>
    </SectionWrapper>
  )
}

export default StudentCourses;
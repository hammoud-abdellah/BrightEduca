import './SectionCourses.css'
import {SectionWrapper, SectionHeader,CourseAdmin, AddCourse} from '../index'
import Button from 'react-bootstrap/Button';
import { useCoursesList } from '../../hooks/useCoursesList';
import { useState } from 'react';




function SectionCourses() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };


  const ScrollToAddCourse = () => {
    const addcourse = document.getElementById("addcourse")
    if(addcourse) {
     addcourse.scrollIntoView({block: "start", inline: "nearest"});
    }
  }


  const {CoursesList, addCourse, deleteCourse } = useCoursesList();

  const filteredCourses = CoursesList.filter((course) =>
  course.title.toLowerCase().includes(searchInput.toLowerCase()) || course.about.toLowerCase().includes(searchInput.toLowerCase()) || course.category.toLowerCase().includes(searchInput.toLowerCase())
  );
  const handleDeleteCourse = (courseId) => {
    deleteCourse(courseId)
  }
  
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Courses</SectionHeader>
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
            <div className='btn'>
                <Button variant="primary" className='header-button' onClick={ScrollToAddCourse}>Add course</Button>
            </div>
        </div>
        <div className='courses'>
          {filteredCourses.map(course => (
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

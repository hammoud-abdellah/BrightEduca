import './StudentCourses.css'


import {SectionWrapper, SectionHeader,CardCourse} from '../index'
import { useCoursesList } from '../../hooks/useCoursesList';
import { useState } from 'react';


function StudentCourses() {
  const {CoursesList, addCourse, deleteCourse } = useCoursesList();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredCourses = CoursesList.filter((course) =>
  course.title.toLowerCase().includes(searchInput.toLowerCase()) || course.about.toLowerCase().includes(searchInput.toLowerCase()) || course.category.toLowerCase().includes(searchInput.toLowerCase())
  );
  const courses = filteredCourses.map( course =>{
    return <CardCourse key = {course.id} image={course.image} title={course.title} about={course.about} />
  });


  return (
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
        </div>
        <div className='courses'>
          {courses}
        </div>
    </SectionWrapper>
  )
}

export default StudentCourses;
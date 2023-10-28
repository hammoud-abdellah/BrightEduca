import axios from "axios";
import { useEffect, useState } from "react";


export function useCoursesList() {
    const [CoursesList, setCoursesList] = useState([]);
    
    function addCourse(course) {
      axios.post("http://localhost:1337/addCourse", course)
        .then( response =>{
           console.log(response.data.message);
        })
        .catch((err)=>{
          console.log("Error adding course:", err);
        })
    }


    function deleteCourse(courseId) {
      axios.delete(`http://localhost:1337/deleteCourse/${courseId}`)  
            .then((response)=>{
              console.log(response.data.message);
              window.location.reload();
            })
            .catch((err)=>{
              console.log("Error deleting course" , err);
            })
    }
 

    useEffect(() => {
        axios.get('http://localhost:1337/Courses')
          .then(response => {
            setCoursesList(response.data);
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
    }, []);
  
    return { CoursesList, addCourse,deleteCourse };
  }

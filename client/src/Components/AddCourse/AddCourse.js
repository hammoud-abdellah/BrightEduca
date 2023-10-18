
import { useState } from 'react';
import './AddCourse.css'
import { v4 as uuidv4 } from 'uuid';
import { useCoursesList } from '../../hooks/useCoursesList';



function AddCourse() {

    const {CoursesList , addCourse} = useCoursesList();

    const [Title, setTitle] = useState("");
    const [About, setAbout] = useState("");
    const [Image, setImage] = useState("");
    const [category, setCategory] = useState('');
    const [pdf_link, setPdf_link] = useState('');

    
    const handleSubmit = (e) => {
        // e.preventDefault();
        const newCourse={
            id :uuidv4(),
            image : Image ,
            title : Title,
            about : About,
            category : category,
            pdf_link : pdf_link,
        }
        addCourse(newCourse);
        clearInputs();
    }

    const clearInputs = () =>{
        setTitle('');
        setAbout('');
        setImage('');
        setCategory('');
        setPdf_link('');
    }


  return (
    <form id='addcourse' className='add-course-form' onSubmit={handleSubmit}>
         <div className="form-outline mb-4">
            <label className="form-label" htmlFor="title">Title:</label>
            <input type="text" id="title" className="form-control form-input" required
            value={Title} 
            onChange={(e) => {
                setTitle(e.target.value)
            }}/>
            
        </div>
        <div className="form-outline mb-4"> 
            <label className="form-label" htmlFor="about">About the course:</label>
            <textarea className="form-control form-input" id="about" rows="4" required
            value={About}
            onChange={(e) => {
                setAbout(e.target.value)
            }}></textarea>
        </div>
        <div className="form-outline mb-4"> 
            <label className="form-label" htmlFor="image">image URL:</label>
            <textarea className="form-control form-input" id="image" rows="4" required
            value={Image}
            onChange={(e) => {
                setImage(e.target.value)
            }}></textarea>
        </div>
        <div className="form-outline mb-4"> 
            <label className="form-label" htmlFor="categories">Choose the category:&nbsp; &nbsp; &nbsp;</label>
            <select id="categories" name="options[]" required
            value={category} 
            onChange={(e) => {
                setCategory(e.target.value)
            }} >
                <option value="category">category</option>
                <option value="Software">Software</option>
                <option value="Languages">Languages</option>
                <option value="Soft Skills">Soft Skills</option>
            </select>
        </div>
        <div className="form-outline mb-4"> 
            <label className="form-label" htmlFor="image">course pdf URL: <p>put your course in a drive link</p></label>
            <textarea className="form-control form-input" id="image" rows="4" 
            value={pdf_link}
            onChange={(e) => {
                setPdf_link(e.target.value)
            }}></textarea>
        </div>

        
        <div className='button'>
            <button type='submit' className='Add-button'>Add the course</button>
        </div>
    </form>
  )
}

export default AddCourse;


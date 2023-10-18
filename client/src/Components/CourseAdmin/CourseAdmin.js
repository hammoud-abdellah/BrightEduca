import './CourseAdmin.css'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CourseAdmin(props) {

  CourseAdmin.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired, 
  };

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      props.onDelete();
    }

  };

  return (
    <Card style={{ width: '18rem' }} className='course-card'>
      <Card.Img className='card-img' variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.about}
        </Card.Text>
        <div className='card-btns'>
            <Link to = "/Course">
              <Button variant="primary" className='card-button btn1'>View the course</Button>
            </Link>
            <Button variant="primary" className='card-button btn02'>Edit</Button>
            <Button variant="primary" className='card-button btn3' onClick={handleDeleteClick}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CourseAdmin

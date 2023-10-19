import './CardCourse.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function CardCourse(props) {
  return (
    <Card style={{ width: '18rem' }} className='course-card'>
      <Card.Img className='card-img' variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.about}
        </Card.Text>
        <Link to="/Course" >
          <Button variant="primary" className='card-button'>Start Now</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default CardCourse;


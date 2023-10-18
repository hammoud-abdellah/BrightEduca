import './Banner.css'
import { Link } from 'react-router-dom'
import { Signup } from '../../pages/index'


function Banner() {
  return (
    <div className="banner-main">
      <div className='container'>
         <div className='banner-text'>
                  <p className='welcome-text'>Welcome to <span>BrightEduca</span>!<br/></p>
                  <h1 className='sub-text'>
                     Explore a world of knowledge  and <br/> 
                     discovery.
                  </h1>
         </div>
         <div className="banner-button">
                  <Link to="/Signup">
                     <button>Get Started</button>
                  </Link>
         </div>
         {/* <div className='row'>
            <div className='col-sm-5'>
               
            </div>
            {/* <div className='col-sm-7'>
                <img className="img-fluid" src="https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            </div> 
         </div> */}
      </div>
    </div>
  )
}

export default Banner

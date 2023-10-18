import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle';
import  'react-toastify/dist/ReactToastify.css';


import { Container, Footer} from './Components/index';
import { AdminProfile, CourseDetails, Home, Signin, Signup , StudentProfile} from './pages/index';
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoute';




function App() {
 

  return (
    <Router>
      <ToastContainer/>
          
          <Container>
            <Routes>
              
              { /*Public Routes */}
              <Route exact path='/' element={ <Home/>}/>
              <Route exact path='/Signup' element={ <Signup/> }/>
              <Route exact path='/Signin' element={ <Signin/> }/>
             
              { /*Private Routes */}
              <Route element = {<ProtectedRoute/>}>
                    <Route exact path='/Student' element={ <StudentProfile/> }/>
                    <Route exact path='/Admin' element={<AdminProfile/> }/>
                    <Route exact path='/Course' element={<CourseDetails/> }/>
              </Route>


            </Routes>
          </Container>
          <Footer/>
    </Router>
    
  );
}

export default App;

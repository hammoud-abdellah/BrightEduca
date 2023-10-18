import {useState} from 'react'
import{useNavigate, Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import './Signup.css';
import axios from 'axios';
import validation from './SignupValidation';

function Signup() {

	const navigate = useNavigate();
  const [Errors, setErrors] = useState({});

  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const {username, email, password} = inputValue;
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(inputValue))

    //FOR MYSQL
    if (Errors.username === "" && Errors.email === "" && Errors.password === "") {
        axios.post("http://localhost:1337/register", inputValue)
        .then(res => {
          if(res.data){
            handleSuccess("Registration successful");
            navigate("/Signin")
          }else{
            handleError("Registeration failed")
          }
        })
        .catch(err => {
          handleError("connection failed")
          console.log(err)
        })
        setInputValue({
          ...inputValue,
          username: "",
          email: "",
          password: "",
        });
    }
    
    //FOR MONGO
    // try {
    //   const { data } = await axios.post(
    //     "http://localhost:1337/signup",
    //     {
    //       ...inputValue,
    //     },
    //     { withCredentials: false }
    //   );
    //   const { success, message } = data;
    //   if (success) {
    //     handleSuccess(message);
    //     setTimeout(() => {
    //       navigate("/");
    //     }, 1000);
    //   } else {
    //     handleError(message);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };



  return (
      <div className='main'>
            <div className='form-container'>
              <h1 className='form-header'>Sign Up</h1>
              <form onSubmit={handleSubmit}> 
                <input
                  name='username'
                  className='form-input'
                  value={username}
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Name"
                />
                {Errors.username && <>
                  <br/> 
                  <span className='text-danger'>{Errors.username}</span>
                </>}
                <br />
                <input
                  name='email'
                  className='form-input'
                  value={email}
                  onChange={handleOnChange}
                  type="email"
                  placeholder="Email"
                />
                {Errors.email && <>
                  <br/> 
                  <span className='text-danger'>{Errors.email}</span>
                </>}
                <br />
                <input
                  name='password'
                  className='form-input'
                  value={password}
                  onChange={handleOnChange}
                  type="password"
                  placeholder="Password"
                />
                {Errors.password &&<>
                  <br/>
                  <span className='text-danger'>{Errors.password}</span>
                </> }
                <br />
                <p>You already have an account? <Link to="/Signin" className='link'>Sign In here</Link></p>
                <button type="submit" value="Register" className='form-button'>Sign Up</button>
                
              </form>
            </div>

      </div>
  )
}

export default Signup

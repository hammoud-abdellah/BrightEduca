import {useContext, useEffect, useState} from 'react'
import './Signin.css';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
import validation from './SigninValidation';
import { AuthContext } from '../../Context/AuthContext';



function Signin() {


    const navigate = useNavigate();
    const [Errors, setErrors] = useState({});
    // const [User, setUser] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);


    const [inputValue, setInputValue] = useState({
      email: "",
      password: "",
    });
    const { email, password } = inputValue;
    const handleOnChange = (e) => {
      const { name, value } = e.target;
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
        position: "bottom-left",
      });

    const handleSubmit = async (e) => {
      e.preventDefault();
      setErrors(validation(inputValue));

      //FOR MYSQL
      if(Errors.email === "" && Errors.password === "") {
        await axios.post("http://localhost:1337/login", inputValue)
        .then(res => {
          if(res.data === "isAdmin"){
            handleSuccess("login successful");
            
            
            setTimeout(() => {
              setIsAuthenticated(true);
              navigate("/Admin");
            }, 1000);
            
          }
          else if(res.data === "isStudent"){
            handleSuccess("login successful");
            
            
            setTimeout(() => {
              setIsAuthenticated(true);
              navigate("/Student");
            }, 1000);
            
          }
          else{
            handleError("email or password incorrect");
          }

        })
        .catch(err => console.log(err))
        setInputValue({
          ...inputValue,
          email: "",
          password: "",
        });
      }
      console.log(isAuthenticated);

      // FOR MONGO
      // try {
      //   const { data } = await axios.post(
      //     "http://localhost:1337/login",
      //     {
      //       ...inputValue,
      //     },
      //     { withCredentials: false }
      //   );
      //   console.log(data);
      //   const { success, message } = data;
      //   if (success) {
      //     handleSuccess(message);
      //     setUser(true);
      //     setTimeout(() => {
      //       navigate("/Student");
      //     }, 1000);
      //   } else {
      //     handleError(message);
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    };

    // useEffect(()=>{
    //   setIsAuthenticated(localStorage.getItem("isLogged"))
    // }, [IsAuthenticated, navigate])


    
  return (
    <div className='form-container'>
        <h1 className='form-header'>Login</h1>
        <form onSubmit={handleSubmit}>
            <input
                     name='email'
                    className='form-input'
                    value={email}
                    onChange={handleOnChange}
                    type="email"
                    placeholder="Email"
            />
            {Errors.email && <>
              <br/> <span className='text-danger'>{Errors.email}</span>
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
            {Errors.password && <>
              <br/> <span className='text-danger'>{Errors.password}</span>
            </>}
            <br />
            <p>You don't have an account? <Link to="/Signup" className='link'>Sign Up here</Link></p>
            
            <button type='submit' value="Login" className='form-button'>Sign In</button>
            
        </form>
      </div>

  )
}

export default Signin;



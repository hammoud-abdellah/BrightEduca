import './StudentProfile.css'

import { StudentCourses} from '../../Components/index'
import { HeaderProfile } from '../../Components/Header/Header'
import { useContext} from 'react';
import Signin from '../Signin/Signin';
import { AuthContext } from '../../Context/AuthContext';


function StudentProfile() {

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  console.log(isAuthenticated);

  // const navigate = useNavigate();
  // const [cookies, removeCookie] = useCookies([]);
  // const [username, setUsername] = useState("");
  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     if (!cookies.token) {
  //       navigate("/Signin");
  //     }
  //     const { data } = await axios.post(
  //       "http://localhost:1337",
  //       {},
  //       { withCredentials: false }
  //     );
  //     const { status, user } = data;
  //     setUsername(user);
  //     return status
  //       ? toast(`Hello ${user}`, {
  //           position: "top-right",
  //         })
  //       : (removeCookie("token"), navigate("/Signin"));
  //   };
  //   verifyCookie();
  // }, [cookies, navigate, removeCookie]);
  // const Logout = () => {
  //   removeCookie("token");
  //   navigate("/signup");
  // };
  return (
     <>
      {isAuthenticated ?(
        <div className='student-main'>
          <HeaderProfile/>
          <StudentCourses/>
         </div>
         ) : (<Signin/>)
    }
     </>
  )
}

export default StudentProfile

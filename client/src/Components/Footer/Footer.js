import "./Footer.css"

import { BiCopyright } from "react-icons/bi"
function Footer() {
  return (
    <footer className="flex-shrink-0 py-4 text-white-50 ">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <p>Copyright <span style={{"color": "rgb(78, 78, 254)"}}><BiCopyright/> </span>2023 E-Learning Platform. Created by Abdellah. All rights reserved.<br/>
            </p>
          </div>
        </div>
      </div>
  </footer>
  )
}

export default Footer

// import React from 'react';
// import logo from "../../images/logo.jpg"

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
     
//       <div className="container-fluid">
       
//         <a className="navbar-brand" href="/">
//           <img src={logo} alt="Brand Logo" width="180" height="180" />
//         </a>

       
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

       
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto"> 
//             <li className="nav-item">
//               <a className="nav-link" href="#about">About Us</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#services">Services</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#resources">Resources</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#contact">Contact Us</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
    
//   );
// }

// export default Navbar;


import React from 'react';
import logo from "../../images/logo.jpg";
import './Navbar.css'; // Make sure to create this CSS file

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
      <div className="container-fluid">
      
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Brand Logo" className="navbar-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resources">Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import logo from '../../utils/image/Untitled_design-removebg-preview.png';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const Navbar = () => {
  
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   console.log("testing");
  //   const accessToken = localStorage.getItem('accessToken');
  //   setIsLoggedIn(accessToken !== null);
  // },[isLoggedIn]);

  const {isLogin,setIsLoggedIn} = useContext(UserContext)

  useEffect (()=>{
    console.log("islogin" ,isLogin);
  },[isLogin])


  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');

    setIsLoggedIn(false);
  };

  return (
    <div className='header'>
      <div className="container">
        <div className="main">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="logins">
            {isLogin ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login" style={{textDecoration:"none"}}> <h3>Login</h3> </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;














// import React from 'react';
// import logo from '../../utils/image/Untitled_design-removebg-preview.png';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/UserContext';


// const Navbar = () => {
//   const { isLoggedIn, logout } = useAuth();
//   return (
//     <div className='header'>
//       <div className="container">
//         <div className="main">
//           <div className="logo">
//             <img src={logo} alt="logo" />
//           </div>
//           <div className="logins">
//             {isLoggedIn ? (
//               <button onClick={logout}>Logout</button>
//             ) : (
//               <Link to="/login" style={{ textDecoration:"none" }}> <h3>Login</h3> </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Navbar;






























// import React, { Component } from 'react';
// import './Navbar.css';
// import logo from '../../utils/image/Untitled_design-removebg-preview.png';
// import { Link } from 'react-router-dom';
// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     };
//   }
//   componentDidMount() {
//     const accessToken = localStorage.getItem('accessToken');
//     this.setState({ isLoggedIn: accessToken !== null });
//   }
//   handleLogout = () => {
//     localStorage.removeItem('accessToken');
//     this.setState({ isLoggedIn: false });
//   };
//   render() {
//     const { isLoggedIn } = this.state;
//     return (
//       <div className='header'>
//         <div className="container">
//           <div className="main">
//             <div className="logo">
//               <img src={logo} alt="logo" />
//             </div>
//             <div className="logins">
//               {isLoggedIn ? (
//                 <button onClick={this.handleLogout}>Logout</button>
//               ) : (
//                 <Link to="/login" style={{textDecoration:"none"}}> <h3>Login</h3> </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Navbar;
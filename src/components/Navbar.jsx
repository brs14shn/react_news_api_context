import React from "react";
//  
import { Link,useNavigate } from "react-router-dom";
import { useCustomAuthContext } from "../context/AuthContext";

const Navbar = () => {
const {currentUser,setCurrentUser} =useCustomAuthContext()
const navigate = useNavigate()
console.log(currentUser);

  // const currentUser = {"displayName":"Emre Eken"}

  const handleLogOut = ()=>{
    navigate("/login")
    setCurrentUser("")
  }


  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary shadow-lg p-3 rounded-0">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <h4>News</h4>
          </Link>
          <div className="d-flex text-white align-items-center ">
            {currentUser ? (
              <>
                
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={()=>navigate("/favorite")}
                >
                  Favourite
                </button>
                <button
                  className="ms-2  me-2 btn btn-outline-light"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
                <h5 className="mb-0 text-capitalize">
                  {currentUser.username}
                </h5>
              
              </>
            ) : (
              <>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
                <button
                  className="ms-2 btn btn-outline-light"
                  // onClick={() => navigate('/register')}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

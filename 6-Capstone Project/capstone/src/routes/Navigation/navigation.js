import React from "react";
import { Outlet , Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";

const Navigation = () => {
    return (
       <React.Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
            <div><CrwnLogo/></div>  
            </Link>
         <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                Shop
            </Link>
         </div>
        </div>
        <Outlet/>
       </React.Fragment>
    )
}
export default Navigation;

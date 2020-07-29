import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import logo-icon from "../images/logo-icon.png";


function Navigation(){
    const [activeItem, setActiveItem] = useState();
  
    return (
        <Menu className="nav">
            <Menu.Item
                as={Link}
                to="/"
                name="job-saver"
                // active={activeItem === "Save this Job"}
                // onClick={() => handleItemClick("save_this_job")}
                >
                {<Image src={logo-icon} size="tiny" spaced alt="save this job" />}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/login"
                name="sign-in"
                // active={activeItem === "sign-in"}
                // onClick={() => handleItemClick("sign-in")}
                position="right"
            >
                Sign-In
            </Menu.Item>
        </Menu>
    );
  }
  export default Navigation;
  
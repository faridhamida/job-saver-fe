import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import cornerlogo from "../images/cornerlogo.png";


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
                {<Image src={cornerlogo} size="tiny" spaced alt="save this job" />}
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
  
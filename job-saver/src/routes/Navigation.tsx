import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";

function Navigation() {
    const [activeItem, setActiveItem] = useState();
  
    return (
        <Menu className="nav">
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
  
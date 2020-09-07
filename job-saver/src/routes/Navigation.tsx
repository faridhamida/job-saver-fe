import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import cornerlogo from "../images/cornerlogo.png";


import logout from "./logout";
import { useOktaAuth } from "@okta/okta-react";

function Navigation() {
  const [activeItem, setActiveItem] = useState();
  const { authState, authService } = useOktaAuth();

  const handleItemClick = name => setActiveItem(name);

  return (
    <Menu className="nav">
      <Menu.Item
        as={Link}
        to="/"
        name="job_saver"
        active={activeItem === "Job Saver"}
        onClick={() => handleItemClick("job_saver")}
      >
        {<Image src={cornerlogo} size="tiny" spaced alt="job saver" />}
      </Menu.Item>
      {authState.isAuthenticated ? (
        <>
          <Menu.Item
            as={Link}
            to="/dashboard"
            name="dashboard"
            active={activeItem === "dashboard"}
            onClick={() => handleItemClick("dashboard")}
            position="right"
          >
            Dashboard
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/"
            name="sign-out"
            active={activeItem === "sign-out"}
            onClick={() => {
              handleItemClick("sign-out");
              logout(authState, authService);
            }}
          >
            Sign-Out
          </Menu.Item>
        </>
      ) : (
        <Menu.Item
          as={Link}
          to="/login"
          name="sign-in"
          active={activeItem === "sign-in"}
          onClick={() => handleItemClick("sign-in")}
          position="right"
        >
          Sign-In
        </Menu.Item>
      )}
    </Menu>
  );
}
export default Navigation;
  
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Menu, Button } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

const NavBar = ({ setFormOpen }) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "15px" }}
          />
          Re-vents
        </Menu.Item>
        <Menu.Item name="Events" exact as={NavLink} to="/events" />
        <Menu.Item name="Sandbox" exact as={NavLink} to="/sandbox" />
        {authenticated && (
          <Menu.Item as={NavLink} exact to="/createEvent">
            <Button positive inverted content="Create Event" />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;

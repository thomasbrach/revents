import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <h1>Re-vents</h1>
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard setFormOpen={setFormOpen} formOpen={formOpen} />
      </Container>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route
          path={"/(.+)"}
          render={() => (
            <>
              <NavBar />
              <Container className="main">
                <Route path="/events" exact component={EventDashboard} />
                <Route path="/events/:id" exact component={EventDetailedPage} />
                <Route
                  path={["/createEvent", "manage/:id"]}
                  exact
                  component={EventForm}
                />
              </Container>
            </>
          )}
        />
      </BrowserRouter>
    </>
  );
};

export default App;

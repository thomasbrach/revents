import React from "react";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import Sandbox from "../../features/sandbox/Sandbox";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  // const { key } = useLocation();

  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route
          path={"/(.+)"}
          render={() => (
            <>
              <NavBar />
              <ScrollToTop />
              <Container className="main">
                <Route exact path="/events" component={EventDashboard} />
                <Route exact path="/sandbox" component={Sandbox} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route
                  path={["/createEvent", "/manage/:id"]}
                  component={EventForm}
                  // key={key}
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

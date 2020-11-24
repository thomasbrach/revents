import cuid from "cuid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";

const EventForm = ({ match, history }) => {
  const dispatch = useDispatch();

  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = () => {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: "Bob",
            attendees: [],
            hostPhotoURL: "assets/user.png",
          })
        );
    history.push("/events");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the event" : "Create new event"} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event title"
            name="title"
            value={values.title}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={values.category}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={values.description}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            value={values.venue}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={values.date}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          type="submit"
          floated="right"
          content="Cancel"
          as={Link}
          to="/events"
        />
      </Form>
    </Segment>
  );
};

export default EventForm;

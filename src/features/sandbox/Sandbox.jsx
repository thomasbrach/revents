import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import TestMap from "./TestMap";
import TestPlaceInput from "./TestPlaceInput";
import { Decrement, Increment } from "./testReducer";

const Sandbox = () => {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);
  const data = useSelector((state) => state.test.data);
  const { loading } = useSelector((state) => state.async);
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const [location, setLocation] = useState(defaultProps);

  const handleSetLocation = (latLng) => {
    setLocation({ ...location, center: { lat: latLng.lat, lng: latLng.lng } });
  };

  return (
    <>
      <h1>Testing</h1>
      <h3>The data is: {data}</h3>
      <Button
        name="increment"
        loading={loading && target === "increment"}
        content="Increment"
        color="green"
        onClick={(event) => {
          dispatch(Increment(20));
          setTarget(event.target.name);
        }}
      />
      <Button
        name="decrement"
        loading={loading && target === "decrement"}
        content="Decrement"
        color="red"
        onClick={(event) => {
          dispatch(Decrement(10));
          setTarget(event.target.name);
        }}
      />
      <Button
        content="Open Modal"
        color="teal"
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
      />
      <div style={{ marginTop: 15 }}>
        <TestPlaceInput setLocation={handleSetLocation} />
        <TestMap location={location} />
      </div>
    </>
  );
};

export default Sandbox;

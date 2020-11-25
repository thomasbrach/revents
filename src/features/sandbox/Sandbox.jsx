import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import { Decrement, Increment } from "./testReducer";

const Sandbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);

  return (
    <>
      <h1>Testing</h1>
      <h3>The data is: {data}</h3>
      <Button
        content="Increment"
        color="green"
        onClick={() => dispatch(Increment(20))}
      />
      <Button
        content="Decrement"
        color="red"
        onClick={() => dispatch(Decrement(10))}
      />
      <Button
        content="Open Modal"
        color="teal"
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
      />
    </>
  );
};

export default Sandbox;

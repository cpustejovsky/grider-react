import React from "react";
import Modal from "../Modal";
import history from "../../history";

export default function StreamDelete() {
  const actions = (
    <>
      <button className="ui negative button">Delete</button>
      <button onClick={() => history.push("/")} className="ui button">
        Cancel
      </button>
    </>
  );
  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete the stream?"
        actions={actions}
      />
    </div>
  );
}

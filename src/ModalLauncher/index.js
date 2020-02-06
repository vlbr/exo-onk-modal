import React from "react";
import { Button } from "@ornikar/kitt";
import Modal from "../Modal";

export default function ModalLauncher() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <React.Fragment>
      <Button onClick={() => setShowModal(true)} type="primary">
        Show Modal{" "}
        <span role="img" aria-label="so cool">
          😎
        </span>
      </Button>

      {showModal && (
        <Modal
          headerTitle="Title"
          footerPresent
          onCloseModal={() => setShowModal(false)}
        />
      )}
    </React.Fragment>
  );
}

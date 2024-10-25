import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [openModalPopup, setOpenModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setOpenModalPopup(!openModalPopup);
  }
  function onClose() {
    setOpenModalPopup(false);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {openModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
}

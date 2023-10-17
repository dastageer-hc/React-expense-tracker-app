import React from "react";
import styles from "./PopUp.module.css";

// destructure classes
const { container, popup, btn, content } = styles;

export default function PopUp({ message, setPopup }) {
  return (
    <div className={container} onClick={setPopup}>
      <div className={popup}>
        <p className={content}>{message}</p>
        <button className={btn} onClick={setPopup}>
          ok
        </button>
      </div>
    </div>
  );
}

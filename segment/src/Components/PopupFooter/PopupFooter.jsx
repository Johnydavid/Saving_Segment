import React from "react";
import "./PopupFooter.css";
import axios from "axios";

const PopupFooter = (props) => {
  const setOpenPopup = props.setOpenPopup;
  const inputData = props.inputData;
  const array = props.array;
  function handleSubmit() {
    if (inputData !== "") {
      const result = array.map((obj) => {
        const [firstKey, firstValue] = Object.entries(obj)[0];
        return { [firstKey]: firstValue };
      });
      const payload = { segment_name: inputData, schema: result };

      axios
        .post(
          "https://51806077-ec82-46af-a9ff-cada573f7782.mock.pstmn.io",
          payload
        )
        .then(function (response) {
          console.log(response);
        });
    }
  }
  return (
    <div className="footer-container">
      <div className="popup-btn-wrapper" onClick={handleSubmit}>
        <button className="popup-save-btn">Save the Segment</button>
      </div>
      <div
        className="popup-btn-wrapper"
        onClick={() => {
          setOpenPopup(false);
        }}
      >
        <button className="popup-close-btn">Cancel</button>
      </div>
    </div>
  );
};
export default PopupFooter;

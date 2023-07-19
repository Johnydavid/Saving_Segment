import React from "react";
import { schemas } from "../../Schemas.js";

const NewSchemaOption = (props) => {
  const element = props.element;
  const editNewSchema = props.editNewSchema;
  const setOpenIndex = props.setOpenIndex;
  return (
    <div className="dropdown-options-container">
      {schemas
        .filter(
          (schema, index) =>
          
            Object.values(schema)[0] !== Object.values(element)[0]
        )
        .map((ele) => (
          <div
          
            className="dropdown-option-wrapper"
            onClick={() => {
              setOpenIndex(null);
              editNewSchema(ele, element);
            }}
          >
            <span className="dropdown-option-bullet"></span>
            <span className="dropdown-option-text">
              {Object.values(ele)[0]}
            </span>
          </div>
        ))}
    </div>
  );
};
export default NewSchemaOption;

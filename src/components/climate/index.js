import React from "react";
import './index.css'
const Climate = (props) => {
  return (
    <div className="tesla-climate">
      <label
        className={`tesla-climate__item ${
          props.value ? "tesla-climate__item--active" : ""
        }  ${!props.limit ? "tesla-heat" : ""}'`}
      >
        <p>
          {props.limit ? "ac" : "heat"} {props.value ? "on" : "off"}
        </p>
        <i className="tesla-climate__icon"></i>
        <input
          type="checkbox"
          name="climate"
          checked={props.value}
          onChange={() => {
            props.handleChangeClimate();
          }}
        />
      </label>
    </div>
  );
};

export default Climate;

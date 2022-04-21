import React from "react";
import "./index.css";
const Stats = (props) => {
  const listItems = props.carstats.map((stat) => (
    <li key={stat.model}>
      <div
        className={
          "tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}"
        }
      ></div>
      <p>{stat.miles}</p>
    </li>
  ));
  //console.log("stats",listItems);
  return (
    <div className="tesla-stats">
      <ul>{listItems}</ul>
    </div>
  );
};

export default Stats;

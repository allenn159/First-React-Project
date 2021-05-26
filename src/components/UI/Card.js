import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
  // children is a reserved named. the value of this special children will always be the content between the open and closing tags of your custom
  // component. in this case, whats between the card tags in ExpenseItem.js
  // you have to make a new class to combine it with the class name from ExpenseItem.js
  // this helps you create a special wrapper type component.
};

export default Card;

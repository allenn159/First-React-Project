// A component in react is just a special JavaScript function.
// Best practice for React is to capitalize the first letter of function and any other new words in the name.
// Create component, export, then import on the file you want it.
// One root element per return statement!
// Import the css file and then use className instead of just class to define an element.
// You can pass data using "props" or properties.
// For functions, you just reference them directly on the html element. See button below. Essentially pointing at the function.
// It's good to name the function with "Handler" if they are triggered upon an event.
import React from "react";
// you can import individual functions from the react library. thise useState is a react hook
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

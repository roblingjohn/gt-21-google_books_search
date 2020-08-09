import React from "react";

const BookResult = (props) => {
  return (
    <div className="container">
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
    </div>
  );
};

export default BookResult;
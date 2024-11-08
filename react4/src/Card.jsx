import React, { useState } from "react";

function Card({ title, image, description }) {
  const [showTitle, setShowTitle] = useState(true);

  const themeTitle = () => {
    setShowTitle(!showTitle);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "5px",
        width: "200px",
        textAlign: "center",
        margin: "20px auto",
      }}
    >
      {showTitle && <h3>{title}</h3>}
      <img
        src={image}
        alt="Card"
        style={{ width: "100%", borderRadius: "5px" }}
      />
      <p>{description}</p>
      <button onClick={themeTitle}>{showTitle ? "Hide" : "Show"} Title</button>
    </div>
  );
}

export default Card;

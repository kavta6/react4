import React, { useState } from "react";

function Theme() {
  const [isDark, setIsDark] = useState(false);

  const theme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={theme}>
        Switch to {isDark ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}

export default Theme;

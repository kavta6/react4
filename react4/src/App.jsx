import React from "react";
import Todo from "./Todo.jsx";
import Theme from "./Theme.jsx";
import Counter from "./Counter.jsx";
import Card from "./Card.jsx";

function App() {
  return (
    <div>
      <h1>My React Components</h1>
      <h2>To-Do List</h2>
      <Todo />

      <h2>Theme Toggle</h2>
      <Theme />

      <h2>Counter</h2>
      <Counter />

      <h2>Card</h2>
      <Card
        title="Sample Card"
        image="https://via.placeholder.com/150"
        description="This is a sample description."
      />
    </div>
  );
}

export default App;

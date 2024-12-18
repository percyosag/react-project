import React from "react";

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

const Logo = () => {
  return (
    <div>
      <h1>🌴 Far Away 💼</h1>
    </div>
  );
};
const Form = () => {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
    </div>
  );
};
const PackingList = () => {
  return <div className="list">List</div>;
};
const Stats = () => {
  return (
    <footer className="stats">
      <em>👜 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
};

export default App;

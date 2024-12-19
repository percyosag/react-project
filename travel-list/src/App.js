import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: true },
];

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
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <input type="text" placeholder="item..." />
      <button>Add</button>
    </form>
  );
};
const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>✖️</button>
    </li>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      <em>👜 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
};

export default App;

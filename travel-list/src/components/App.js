import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const App = () => {
  const [items, setItems] = useState(() => {
    // Retrieve items from localStorage on initial load
    const savedItems = localStorage.getItem("packingItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("packingItems", JSON.stringify(items));
  }, [items]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure, you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;

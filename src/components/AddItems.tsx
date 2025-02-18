import { useState } from "react";

function AddItems() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  function handleChange() {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue(" ");
  }

  return (
    <>
      <div>
        <label>Enter the fruits</label>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={handleChange}>Add Item</button>
      </div>
      <div>
        {items.length === 0 ? (
          <p>No item added</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
export default AddItems;

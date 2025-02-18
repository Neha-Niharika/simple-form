import { useState } from "react";
function Form() {
  const [name, setName] = useState(" ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div>
        <label>Enter your name</label>
        <input value={name} onChange={handleChange} />
      </div>
      <h3>Name is {name}</h3>
    </div>
  );
}
export default Form;

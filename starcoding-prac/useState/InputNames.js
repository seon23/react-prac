import { useState } from "react";

function App() {
  const [names, setNames] = useState(["김철수", "이영희"]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 state: ", prevState);
      return [...prevState, inputValue];
    });
  };

  //  console.log(inputValue);

  return (
    <div>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;

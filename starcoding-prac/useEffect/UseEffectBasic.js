import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // 1. 렌더링 될 때마다 매번 실행
  useEffect(() => {
    console.log("렌더링!!");
    // 정확히 말하면, 이 콜백은 컴포넌트가 화면에 렌더링된 직후에 불린다.
    // 여기에 무거운 작업이 있다면 매우 비효율적일 것.
  });

  // 2. count가 업데이트될 때만 useEffect 실행
  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  // 3. name이 업데이트될 때만 useEffect 실행
  // 즉, 마운트될 때, 그리고  [ item ] 변경될 때만 실행
  useEffect(() => {
    console.log("name 변화");
  }, [name]);

  // 4. 맨 처음 렌더링, 즉 마운팅될 때만 실행
  useEffect(() => {
    console.log("마운팅!!");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type='text' value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}
export default App;

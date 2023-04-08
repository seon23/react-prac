import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 횟수: ", renderCount.current);
  });
  // 처음에 렌더링 횟수가 2로 뜨는 이유:
  // 화면 처음에 렌더링될 때 renderCount를 1로 초기화된 데다
  // useEffect로 인해 renderCount가 하나 증가했으므로.

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>count 증가</button>
    </div>
  );
};

export default App;

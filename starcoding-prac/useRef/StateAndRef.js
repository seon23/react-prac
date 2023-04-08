import React, { useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // // 참고로, Ref를 아무리 수정해도 다시 렌더링되지 않으므로, 아래 메시지는 한 번만 출력된다.
  // console.log("countRef: ", countRef);

  console.log("렌더링...");

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  };
  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>Count 증가</button>
      <button onClick={increaseCountRef}>Ref 증가</button>
    </div>
  );
};
export default App;

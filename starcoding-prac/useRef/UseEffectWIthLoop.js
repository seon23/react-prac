import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const [renderCount, setRenderCount] = useState(1);

  useEffect(() => {
    console.log("렌더링!!");
    setRenderCount(renderCount + 1);
  });

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

/*
무한 루프가 발생하는 이유: 
증가 버튼 클릭 -> count state 업데이트, 렌더링 
-> useEffect 호출 -> renderCount state 업데이트
-> useEffect 호출 -> renderCount state 업데이트
-> useEffect 호출 -> ... 무한 루프
여기서 ref가 빛을 발한다.
*/

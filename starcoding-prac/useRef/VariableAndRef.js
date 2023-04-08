import React, { useRef, useState } from "react";

const App = () => {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  console.log("렌더링!!!");

  const doRendering = () => {
    // renderer는 state이므로, 이 값이 변하면 화면이 자동으로 렌더링 된
    // 컴포넌트가 다시 렌더링될 때마다 변수 countVar는 초기화되지만 ref 값은 유지된다.

    setRenderer(renderer + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  };

  const increaseCountVar = () => {
    countVar = countVar + 1;
    console.log("Var: ", countVar);
  };

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>Render!</button>
      <button onClick={increaseCountRef}>Ref 증가</button>
      <button onClick={increaseCountVar}>Var 증가</button>
      <button onClick={printResults}>Ref, Var 값 출력</button>
    </div>
  );
};

export default App;

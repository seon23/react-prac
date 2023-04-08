import React, { useState, useMemo } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산!");
  for (let i = 0; i < 999999999; i++) {} // 생각하는 시간
  return number + 1000;
};

const easyCalculate = (number) => {
  console.log("짱 쉬운 계산!");
  return number + 1;
};

const App = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // App 컴포넌트 렌더링 = App이라는 함수가 호출
  // -> App 함수 내부 변수 초기화 -> hardSum도 초기화, harCalculate 계속 호출 -> 렌더링시 딜레이

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type='number'
        value={hardNumber}
        onChange={(event) => setHardNumber(parseInt(event.target.value))}
      />
      <span> + 1000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type='number'
        value={easyNumber}
        onChange={(event) => setEasyNumber(parseInt(event.target.value))}
      />
      <span> + 1= {easySum}</span>
    </div>
  );
};

export default App;

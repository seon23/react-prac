import React, { useState, useEffect, useMemo } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = {
  //   country: isKorea ? "한국" : "외국",
  // };

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출");
    // 오래걸리는 작업을 해야한다면, 의존성 배열의 요소를 결정하는 데에 useMemo를 사용하면 된다.
  }, [location]);

  return (
    <div>
      <h2>하루에 몇 끼 먹어요?</h2>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
};

export default App;

import React, { useState, useReducer } from "react";

const ACTION_TYPES = {
  deposit: "deposit",
  witdraw: "withdraw",
};

// 인자1은 현재 state로, reducer가 불릴 시점에 money에 들어 있는 값
const reducer = (state, action) => {
  console.log("reducer가 일을 합니다", state, action);

  switch (action.type) {
    case "ACTION_TYPES.deposit":
      return state + action.payload;

    case "ACTION_TYPES.withdraw":
      return state - action.payload;

    default:
      return state;
  }
};
const App = () => {
  const [number, setNumber] = useState(0);

  // const [새로운 state, useReducer가 만들어준 dispatch 함수] = useRedcuer(reducer, staet 초기값)
  // money state는 reducer를 통해서만 수정 가능
  // 그리고 App 밖에 만든 reducer는 useReducer의 인자로 전달됨
  // reducer를 통해 money 수정하고 싶을 때마다 dispatch 부를 것임.
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input
        type='number'
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
        step='1000'
      />
      <button
        onClick={() => {
          dispatch({ type: "ACTION_TYPES.deposit", payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "ACTION_TYPES.withdraw", payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
};

export default App;

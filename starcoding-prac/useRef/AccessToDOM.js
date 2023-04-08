import React, { useRef, useEffect } from "react";

const App = () => {
  const inputRef = useRef("hi");

  useEffect(() => {
    // console.log(inputRef);

    // inputRef.current에 있는 요소에 focus한다.
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}님!`);
    inputRef.current.focus();
  };

  return (
    <div>
      {/* input 태그의 ref 어트리뷰트로 ref 변수를 주면, 이 ref 변수가 input DOM 요소를 참조한다. */}
      <input ref={inputRef} type='text' placeholder='username' />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default App;

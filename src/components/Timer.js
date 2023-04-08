import React, { useEffect } from "react";

const Timer = () => {
  // Timer가 맨 처음 브라우저에 렌더링될 때 useEffect 안에 있는 콜백함수가 실행되는데
  // 이 함수는 setInterval의 인자로 들어 있는 콜백을 1초마다 반복해서 부른다.
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중...");
    }, 1000);

    // 타이머를 종료하려면 useEffect의 return 값으로 타이머를 정리하는 함수를 준다.
    // 정확히는 'useEffect의 첫 번째 인자로 오는 함수'의 리턴 값으로 '타이머를 정리하는 함수'를 준다.
    // Clean Up 작업을 아래 함수는, Timer 컴포넌트가 언마운트될 때 실행된다.
    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    };
  }, []);
  
  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
};

export default Timer;

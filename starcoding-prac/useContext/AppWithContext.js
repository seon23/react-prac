import React, { useState } from "react";
import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    // Context의 Provider는 value라는 prop을 하나 받는데,
    // 이 value 안에는 전달하고자 하는 데이터를 넣으면 된다.

    <UserContext.Provider value={"김철수"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default App;

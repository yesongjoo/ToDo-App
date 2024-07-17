import React from "react";
import Todo from "./components/Todo"; // 정확한 대소문자 사용

const App = () => {
  return (
    <div className="bg-slate-900 grid py-4 min-h-screen">
      <Todo />
    </div>
  );
};

export default App;

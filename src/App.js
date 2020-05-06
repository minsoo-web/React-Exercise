import React from "react";

function App() {
  const name = "리액트x";
  return <>{name === "리액트" ? <div>리액트</div> : <div>리액트 x</div>}</>;
}

export default App;

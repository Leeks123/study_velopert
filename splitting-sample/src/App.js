import React, { useState, Suspense } from "react";
import loadable from "@loadable/component";
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>Loading...</div>,
});

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div>
      <p onClick={onClick} onMouseOver={onMouseOver}>
        hello react
      </p>
      {visible && <SplitMe />}
    </div>
  );
};

export default App;

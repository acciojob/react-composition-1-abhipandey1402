
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {

  let obj = [{title: "Tab 1", content: "This is content for Tab 1."}, {title: "Tab 2", content: "This is content for Tab 2."}, {title: "Tab 3", content: "This is content for Tab 3."}]

  return (
    <div>
      Abhi
      <Tabs tabs={obj} />
    </div>
  )
}

export default App

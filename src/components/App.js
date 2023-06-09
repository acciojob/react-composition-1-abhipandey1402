
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {

  let obj = [{titles: "Tab 1", contents: "This is content for Tab 1."}, {titles: "Tab 2", contents: "This is content for Tab 2."}, {titles: "Tab 3", contents: "This is content for Tab 3."}]

  return (
    <div>
      <Tabs tabs={obj} />
    </div>
  )
}

export default App

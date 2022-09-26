import React from "react";

import "./App.css";
import AddPosts from "./Features/Posts/AddPosts";
import PostList from "./Features/Posts/PostList";
// import Counter from "./Features/Counter/Counter";

const App = () => {
  return (
    <main className="App">
      {/* count er app */}
      {/* <Counter /> */}
      {/*counter app end*/}
      <AddPosts />
      <PostList />
    </main>
  );
};

export default App;

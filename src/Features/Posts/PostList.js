import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((item, index) => {
    return (
      <div className="postdata">
        <article className="post" key={index}>
          <h3>{item.title}</h3>
          <p>{item.content.substring(0, 100)}</p>
        </article>
        
      </div>
    );
  });
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;

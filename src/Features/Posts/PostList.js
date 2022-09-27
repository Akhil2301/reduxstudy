import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionAdded";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderPost=posts.slice().sort((a,b)=> b.date.localeCompare(a.date))

  const renderedPosts = orderPost.map((item, index) => {
    return (
      <div className="postdata" key={index}>
        <article className="post" >
          <h3>{item.title}</h3>    
          <p>{item.content.substring(0, 100)}</p>
          <p>
            <PostAuthor userId={item.userId}/> 
            <TimeAgo timestamp={item.date} />
          </p>
        <ReactionButton post={item}/>
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

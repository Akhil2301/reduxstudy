import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUser } from "../UserList/UserSlice";
// import { nanoid } from "@reduxjs/toolkit";
const AddPosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(selectAllUser);
  const onPostSubmit = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const cansave = Boolean(title) && Boolean(content) && Boolean(userId);
  const userOption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="addpost">
      <h2>AddPosts</h2>
      <div>
        <label>Post Title</label>
        <div>
          <input
            className="indata"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
      </div>
      <div>
        <label>Author</label>
      </div>
      <div>
        <select
          className="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}>
          <option></option>
          {userOption}
        </select>
      </div>
      <div>
        <label> Content: </label>
      </div>
      <div>
        <textarea
          rows={4}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </div>
      <div>
        <button onClick={onPostSubmit} disabled={!cansave}>
          Save
        </button>
      </div>
    </section>
  );
};

export default AddPosts;

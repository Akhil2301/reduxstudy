import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {postAdded} from './postsSlice'
// import { nanoid } from "@reduxjs/toolkit";
const AddPosts = () => {
   const [title,setTitle]=useState('')
   const [content,setContent]=useState('')
   const dispatch=useDispatch()
   const onPostSubmit=()=>{
     if(title && content){
      dispatch(
         postAdded(title,content  )
      )
      setTitle('')
      setContent('')
     }
   }
  return (
    <section>
      <h2>AddPosts</h2>
      <div>
        <label>Post Title</label>
        <input
         type='text'
         onChange={(e)=>setTitle(e.target.value)}
         value={title}
        />
      </div>
      <div>
        <label> Content: </label>
        <textarea
         rows={4}
         onChange={(e)=>setContent(e.target.value)}
         value={content}
        />
      </div>
      <div>
        <button onClick={onPostSubmit}>Save</button>
      </div>
    </section>
  );
};

export default AddPosts;

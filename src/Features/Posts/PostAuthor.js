import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUser } from '../UserList/UserSlice'

const PostAuthor = ({userId}) => {

   const users=useSelector(selectAllUser) 
   const author=users.find(user=>user.id==userId);

  return (
    <span>
        {author ? author.name:'unknown Author'}
    </span>
  )
}

export default PostAuthor
import { useDispatch, useSelector } from "react-redux"
import { reactionAdded } from "./postsSlice"
const reactionEmoji={
    thumbsup:'👍',
    wow:'😮',
    heart:'❤',
    coffee:'☕'
} 

const ReactionButton=({post})=>{
    // console.log(post)
    const dispatch=useDispatch()
    const reactionButtons=Object.entries(reactionEmoji).map(([name,emoji])=>{


        return (
            <button
            key={name}
            onClick={()=>{
                dispatch(reactionAdded({postId:post.id,reaction:name}))
            }
            }
            >
                {emoji}{post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>

    }
export default ReactionButton
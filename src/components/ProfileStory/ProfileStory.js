import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../store/posts/postsSlice'
import { selectUsers } from '../../store/userSlice/userSlice'
import "../ProfileStory/ProfileStory.css"

function ProfileStory({ name, comments, img, id,postText}) {
  console.log();
  const dispatch = useDispatch()
  const { currentUser } = useSelector(selectUsers)
  const formRef = useRef(null)

  const handlesubmit = (e) => {
    e.preventDefault()
    dispatch(addComment({
      id,
      body: formRef.current[0].value,
      username: currentUser.username
    }))
    formRef.current.reset()

  }
  return (

    <div className='storyChild'>
      <div className='by-story'>
        <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
        <p>{name}</p>
        <p>shared a video from the playlist</p>

      </div>
        {/* <p>{postText}</p> */}
      <div className='story-pos'>
        <img src={img} />
      </div>
      <div>
        {
          comments.map(el => (
            <span key={el.id} className='span'>
              {el.username}
              <p>{el.body}</p>
            </span>
          ))
        }
      </div>
      <form ref={formRef} onSubmit={handlesubmit} className='form-com'>
        <img style={{ width: "40px", borderRadius: "50%" }} src={img} />
        <input type="text" placeholder="Add a comment" />
        <button>Add to comment</button>
      </form>
    </div>
  )
}

export default ProfileStory
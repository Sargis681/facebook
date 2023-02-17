import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import fetchPosts from '../../store/posts/postsAPI'
import { selectPosts } from '../../store/posts/postsSlice'
import { selectUsers } from '../../store/userSlice/userSlice'
import Intro from '../Intro/Intro'
import PostTopInp from '../PostTopInp/PostTopInp.js'
import "../Profile/Profile.css"
import ProfileStory from '../ProfileStory/ProfileStory'
import SeeAll from '../SeeAll/SeeAll'

function Profile() {
  const navigate = useNavigate()

  const posts = useSelector(selectPosts)
  const dispatch = useDispatch()
  const { currentUser } = useSelector(selectUsers)
  const { usersData } = useSelector(selectUsers)
  console.log(usersData);
  // console.log(currentUser.name);

  console.log(posts);

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts())
    }
  }, [])
  useEffect(() => {
    if (!currentUser) {
      navigate("/login")
    }

  }, [currentUser])
  //  Chjogi xi senc arec efor abnavita @lnum logins Null a uremn pti qci logini ej bayc varia etum

  return (
    <>
      <div className='ProfSt'>
        <div className='prImg'>
          <img style={{ width: "90px", borderRadius: "50%", border: "1px solid", color: "black" }} src='https://media.istockphoto.com/id/1257355594/vector/man-avatar-icon.jpg?s=612x612&w=0&k=20&c=LZP10v92sFRls54xFnhSrrBRsqta3uDNmC116brPCQY=' alt='sax' />
          <div className='frends'>
            <h1>{currentUser?.name}</h1>
            <p>285friends</p>
          </div>
        </div>
        <div className='StProf'>
          <button>Add to Story</button>
          <button>Edit profile</button>
        </div>
      </div>
      <div className='nav-bl'>
        <h3>Post</h3>
        <h3>About</h3>
        <h3>Friends</h3>
        <h3>Photos</h3>
        <h3>Videos</h3>
        <h3>Check-ins</h3>
        <h3>More </h3>
      </div>
      <hr />
      <div className='black'>
        <div className='containerProfil'>
          <div className='Right'>
            <Intro />
            <div className='PhotosBlack'>
              <h4>Photos</h4>
              <h4>See all Photos</h4>
            </div>
            <SeeAll />
          </div>
          <div className='Left'>
            <div>
              <PostTopInp />
            </div>
            <div className='story'>
              {
                posts.map(el => <ProfileStory name={el.name} comments={el.comments} id={el.id} img={el.img} key={el.id} postText={el.postText}/>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
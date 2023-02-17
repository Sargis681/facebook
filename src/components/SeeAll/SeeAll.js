import React from 'react'
import { useSelector } from 'react-redux'
// import { selectPosts } from '../../store/posts/postsSlice'
import { selectUsers } from '../../store/userSlice/userSlice'
import "../SeeAll/SeeAll.css"

function SeeAll() {
  // const posts=useSelector(selectPosts)
  const { usersData } = useSelector(selectUsers)
  console.log(usersData);
  return (
    <div className=' SeeAll'>
      <div className='PhotosBlack1'>
        <h4>Photos</h4>
        <h4>See all Photos</h4>
      </div>
      <div className='SeeAll2'>
        {
          usersData.map(el => (
            <div className='userSt' key={el.id} >
              <img style={{ width: "200px" }} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt='sa' />
              <span>
                {el.name}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SeeAll
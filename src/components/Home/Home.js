import React from 'react'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/posts/postsSlice'
import { selectUsers } from '../../store/userSlice/userSlice'
import "../Home/Home.css"
import LeftContet from '../LeftContent/LeftContet'
import PostTopInp from '../PostTopInp/PostTopInp'
import ProfileStory from '../ProfileStory/ProfileStory'

function Home() {
  const { currentUser } = useSelector(selectUsers)
  const posts = useSelector(selectPosts)
  return (
    <div className='containerHome'>
      <LeftContet />
      <div className='centCont'>
        <div className='centContSl'>
          <div className='imgSl'>
            <img src='https://burst.shopify.com/photos/woman-dressed-in-white-leans-against-a-wall/download' alt='name' />
            <p style={{ color: "red" }}>{currentUser?.name}</p>
          </div>
          <div className='imgSl'>
            <img src='https://burst.shopify.com/photos/woman-dressed-in-white-leans-against-a-wall/download' alt='name' />
          </div>
          <div className='imgSl'>
            <img src='https://burst.shopify.com/photos/woman-dressed-in-white-leans-against-a-wall/download' alt='name' />
          </div>

          <div className='imgSl'>
            <img src='https://burst.shopify.com/photos/woman-dressed-in-white-leans-against-a-wall/download' alt='name' />
          </div>

          <div className='imgSl'>
            <img src='https://burst.shopify.com/photos/woman-dressed-in-white-leans-against-a-wall/download' alt='name' />
          </div>
          <div className='imgSl'>
            <img src='https://burst.shopify.com/photos/woman-dressed-in-white-leans-against-a-wall/download' alt='name' />
          </div>
        </div>
        <div className='postEvr'>
          <PostTopInp />
        </div>
        <div className='storyB'>
          {
            posts.map(el => <ProfileStory name={el.name} comments={el.comments} id={el.id} img={el.img} key={el.id} />)
          }
        </div>
      </div>
      <div className='rightContRelative'>
        <div className='rightCont'>
          <div className='Sponsored'>
            <img src='https://scontent.fevn7-1.fna.fbcdn.net/v/t45.1600-4/331224188_23853264240540250_9080172333181792897_n.png?stp=dst-png_p285x285&_nc_cat=107&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=9irZlVtyNqsAX-KcqGT&_nc_ht=scontent.fevn7-1.fna&oh=00_AfAkgPp2Vf_f52aS5EfedeGc4VG-6ox6ehRLAltzJ46BFA&oe=63F4021E' alt='sa' />
            <span>
              <p>Java Himunqner</p>
              <p>G8ancvir hima</p>
            </span>
          </div>
          <div className='Sponsored'>
            <img src='https://scontent.fevn7-1.fna.fbcdn.net/v/t45.1600-4/314078824_23852017914040052_9154863420848429186_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=104&ccb=1-7&_nc_sid=67cdda&_nc_ohc=0Rt-JvkP3CEAX9dPwnD&_nc_ht=scontent.fevn7-1.fna&oh=00_AfAbfh62bQHVdqCWP1taxrNPwk6TEOqYdBJt_dL_DdU7cQ&oe=63F358D8'alt='sa'  />
            <span>
              <p>Java Script Himunqner</p>
              <p>Miacir mer daserin</p>
            </span>
          </div>
          <hr />
          <div className='YourPages'>
            <h3>Your Pages and profiles</h3>
          </div>
          <hr />
          <div className='birthday'>
            <img style={{ width: "80px", height: "80px" }} src='https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg' alt='sa' />
            <span>
              <h3>Albert Hovhannisyan</h3>
              <p>birthday is today</p>
            </span>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Home
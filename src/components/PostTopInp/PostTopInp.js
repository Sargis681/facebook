import React from 'react'

function PostTopInp() {
  return (
    <div className='postTopInp'>
      <div>
        <img src='https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623624_eTeYrOr8oM08nsPPEmV8gGb60E0MK5vp.jpg' alt='sad' />
        <input type="text" />
        <button>add</button>
      </div>
      <hr />
      <div className='postTopInpbut'>
        <img style={{ width: "30%", height: "30px", borderRadius: "0px" }} src='https://gardinerstparish.ie/wp-content/uploads/2019/03/live-video-350x106.jpg' alt='sax' />
        <span className='pot'>
          <img style={{ width: "30%", height: "30px", borderRadius: "0px" }} src='https://i.pinimg.com/originals/ff/b4/0f/ffb40fdc3e77868f5a93abef221f7aa9.jpg' alt='sa' />
          Photo/Video
        </span>
        <span className='pot1'>
          <img style={{ width: "30%", height: "30px", borderRadius: "0px" }} src='https://cdn3.vectorstock.com/i/1000x1000/53/77/smiley-icon-smiling-face-flat-style-vector-13935377.jpg' alt='sa' />
          Felling/activity
        </span>
      </div>
    </div>
  )
}

export default PostTopInp
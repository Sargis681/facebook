import React from 'react'

function Intro() {
  return (
    <div className='intro'>
      <p>Intro</p>
      <button>Add bio</button>
      <div>
        <span>
          <img style={{ width: "30px", height: "30px" }} src='https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/H804hWf2rBh.png'alt='sa'  />
          <h3> im Went to 66 dproc</h3>
        </span>
        <span>
          <img style={{ width: "30px", height: "30px" }} src='https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/H804hWf2rBh.png' alt='sa' />
          <h3>Went to POLITEXNIK VARJARAN</h3>
        </span>
        <span>
          <img style={{ width: "30px", height: "30px" }} src='https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Yifeo6sHdtL.png'alt='sa'  />
          <h3>Lives in Yerevan,Armenia</h3>
        </span>
        <span>
          <img style={{ width: "30px", height: "30px" }} src='https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/dkccKhK21Su.png' alt='sa' />
          <h3>From Erevan,Armenia</h3>
        </span>
        <button>Edit details</button>
        <button>Add hobbies</button>
        <button>Add featured</button>
      </div>
    </div>
  )
}

export default Intro
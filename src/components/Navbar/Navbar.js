import React from 'react'
import { NavLink, } from 'react-router-dom'
import "../Navbar/Navbar.css"

function Navbar() {
    return (
        <header>
            <div className='containerHeder'>
                <div>
                    <div>
                        <NavLink to="login">
                            <img style={{ width: "50px" }} src='https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png' alt='facebook-logo' />
                        </NavLink>
                        <input type="text" placeholder='Search Facebook...' />
                    </div>
                    <div className='ik'>
                        <img style={{ width: "40px", color: "blue" }} src='https://icon-library.com/images/video-player-icon-png/video-player-icon-png-16.jpg' alt='sa' />
                        <img style={{ width: "40px", color: "blue" }} src='https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png' alt='sa' />
                        <img style={{ width: "40px", color: "blue" }} src='http://www.icons101.com/icon_ico/id_68218/Game.ico' alt='sa' />
                        <img style={{ width: "40px", color: "blue" }} src='https://scontent.fevn7-1.fna.fbcdn.net/v/t45.1600-4/331224188_23853264240540250_9080172333181792897_n.png?stp=dst-png_p285x285&_nc_cat=107&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=9irZlVtyNqsAX-KcqGT&_nc_ht=scontent.fevn7-1.fna&oh=00_AfAkgPp2Vf_f52aS5EfedeGc4VG-6ox6ehRLAltzJ46BFA&oe=63F4021E' alt='sa' />
                    </div>
                    <NavLink to="/">
                        <img style={{ width: "50px", borderRadius: "90%" }} alt="sa" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar
import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import { Context } from '../context/Context'

const Settings = () => {
    const {user} = useContext(Context);
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <from className="settingsForm">
                <label>Profile Pictures</label>
                <div className="settingsPP">
                    <img src={user.profilePic} alt="" />
                    <label htmlFor="fileInput"><i className='settingsPPIcon far fa-user-circle'></i></label>
                    <input type="file"  id="fileInput" style={{display:'none'}} />
                </div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Sarjeet' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='sarjeet@gmail.com' />
                <label htmlFor="">Password</label>
                <input type="password"  />
                <button className="settingsSubmit">Update</button>
            </from>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings
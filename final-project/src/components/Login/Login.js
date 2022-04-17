import React from 'react'
import { LoginUrl } from '../Spotify/Spotify'
import './Login.css'

function Login() {
  return (
    <div className='Login'>
        
        <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' 
         alt=''
        />

        <a href={LoginUrl}>LOGIN WITH SPOTIFY</a>

    </div>
  )
}

export default Login
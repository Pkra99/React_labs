import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>

    return <div>Hi, {user.username} welcome back</div>
}

export default Profile
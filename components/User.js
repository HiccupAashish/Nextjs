import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'

import React from 'react'
import { FaUser } from 'react-icons/fa'
import styled from 'styled-components'
export default function User() {
const router=useRouter()
const {user}=useUser()
if(!user)
  return (

    <div>
        <FaUser onClick={()=>router.push("api/auth/login")}/>
        <h3>Profile</h3>
    </div>
  )
  else{
    console.log(user)
    return(
        <Profile onClick={()=>route.push("/profile")}>
            <img src={user.picture} alt={user.given_name}/>
            <h3>{user.email}</h3>
        </Profile>
    )
  }
}

export const Profile=styled.div`
img{
border-radius:50%;
height: 2em;
width:2em;
}
`

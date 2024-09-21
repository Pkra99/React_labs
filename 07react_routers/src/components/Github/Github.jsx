import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
  return (
    <div className='text-center p-4 m-4 text-white text-2xl bg-gray-500 '>My Total Github Repos: {data.public_repos}
    <img src={data.avatar_url} alt="Github PP" width={200}></img></div>
  )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch("https://api.github.com/users/Pkra99");
    return response.json()
}
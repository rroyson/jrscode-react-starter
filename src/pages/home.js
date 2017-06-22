import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/videos/new">
        <Button>Add Video</Button>
      </Link>
      <h2>Videos</h2>
      <ul>
        <li>Vid 1</li>
        <li>Vid 2</li>
      </ul>
    </div>
  )
}

export default Home

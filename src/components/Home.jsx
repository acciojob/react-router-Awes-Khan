
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>          
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>          
      <h1>Welcome to the Home Page</h1>
    </div>
  )
}

export default Home

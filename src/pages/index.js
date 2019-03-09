import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"


export default () => (
  <div style={{ color: `purple` }}>     
  <h1>Hello Ashkan!</h1>    
  <p>Testing Gatsby!</p> 
  <img src="https://source.unsplash.com/random/400x200" alt="" />
  <Link to="/about/">about us</Link> 
  <button class="primary-button">Click me</button>
  </div>
)

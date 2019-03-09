import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `red` }}>
    <Header headerText="About Gatsby" /> 
    <Header headerText="Its cooooool!" />
    <p>Such wow. Very React.</p>
    <Link to="/">home</Link>
  </div>
)
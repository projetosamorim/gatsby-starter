import * as React from "react"
import {Link} from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
  <div style={{color: `purple`}}>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>
    <Header headerText="Gatsby Developer" />
    <p>Seja bem-vindo!</p>
    <img src= "https://sourse.unsplash.com/random/400x200" alt= ""
/>
  </div>
  )
}

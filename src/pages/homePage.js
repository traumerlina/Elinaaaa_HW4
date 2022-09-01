import React from 'react'
import Booklist from '../components/booklist'
import Header from '../components/header'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Link to="/cart">Go to cart</Link>
      <Booklist/>
    </div>
  )
}

export default HomePage
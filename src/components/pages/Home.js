import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import backgroundImage from '../../assets/background.jpg'
import '../../assets/css/style.css'
export class Home extends Component {
  render() {
    return (
     
      <div  style={{margin:'auto'}} className='container backgroundImage'>
      <div className='row'>
        <Header/>
        <div style={{margin:'auto'}} className='row text-center'>
        <Link to='/signup' className='btn btn-warning' >Sign Up</Link>
        </div>
      </div>
      </div>

    )
  }
}





export default Home
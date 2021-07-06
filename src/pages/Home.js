import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcons from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core' 
import Searchh from '../components/Searchh'

const Home = () => {
    return (
        <div className="home">

          <div className="home-header">

          <div className="home-headerLeft">
         <Link to="/about">About</Link>
         <Link to="/store">Store</Link>
         </div>

         <div className="home-headerRight">
         <Link to="/gmail">Gmail</Link>
         <Link to="/images">Images</Link>
         <AppsIcons/>
         <Avatar/>
         
         </div>

         </div>


         <div className="home-body">
           <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
           <div className="home-inputContainer">
             <Searchh hideButtons/>
         </div>
         </div>
        </div>
    )
}

export default Home

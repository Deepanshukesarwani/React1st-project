import React from 'react'
import './navbar.css'
import Profile from "../../asset/profileimage.jpeg"
const Navbar = () => {
  return (
    <div className="body">
      <div className='container'>
      <div className="sidebar">
        <div className="profile">
          <img src={Profile} alt="" />
          <h6>Profile</h6>
        </div>
        <ul>
          <li><a href="/">
            <spam className="icon"><i className='fas fa-home'></i> </spam>
            <span className="item">Home</span>
            </a></li>
          <li><a href="/">
            <spam className="icon"><i class="fab fa-product-hunt"></i></spam>
          <span className="item">Product</span>
            </a></li>
          <li><a href="/">
            <spam className="icon"><i class="fas fa-shopping-cart"></i> </spam>
          <span className="item">Wishlist</span>
            </a></li>
          <li><a href="/">
            <spam className="icon"><i class="fas fa-users"></i></spam>
          <span className="item">Client</span>
            </a></li>
          <li><a href="/">
            <spam className="icon"><i class="fas fa-exclamation-circle"></i></spam>
          <span className="item">Aboutus</span>
            </a></li>
          <li><a href="/">
            <spam className="icon"><i class="fas fa-sign-out-alt"></i>  </spam>
          <span className="item">Log out</span>
            </a></li>
        </ul>
      </div>
      
    </div>

    </div>
    
  )
}

export default Navbar

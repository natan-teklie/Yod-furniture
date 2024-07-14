import React from 'react'
import   './HeaderNav.css'
import { Link } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <>   <header className="header-area">
    <div className="header-container">
        <div className="site-logo"><Link to='/'> Yod<span>Furniture</span></Link></div>
        <div className="mobile-nav"><i class="fas fa-bars"></i></div>
        <div className="site-nav-menu">
            <ul className="primary-menu">
               
                <li><a href="/">Home</a></li>
             
                <li><a href="/about">About</a></li>
                <li><a href="/product">Product</a></li>
                <li><a href="/gallery">Gallery</a></li>
               <li><a href="/contact">Contact</a></li>
                
            </ul>
        </div>
    </div>
</header>









<script src="https://code.jquery.com/jquery-3.7.1.min.js" ></script>
    <script>
        $(document).ready(function(){
            $(".mobile-nav i").click(function(){
                $(".site-nav-menu").toggleClass("mobile-menu")
            })
        })
    </script>

  </>
  )
}

export default HeaderNav
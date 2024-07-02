import React from 'react'
import   './HeaderNav.css'
import { Link } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <>   <header class="header-area">
    <div class="header-container">
        <div class="site-logo"><a href="">Yod<span>Furniture</span></a></div>
        <div class="mobile-nav"><i class="fas fa-bars"></i></div>
        <div class="site-nav-menu">
            <ul class="primary-menu">
              
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/product'}>product</Link></li>
                <li><Link to={'/gallery'}>Gallery</Link></li>
                <li><a href="#" class=""> <Link to={'/contact'}>Contact</Link> </a></li>
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
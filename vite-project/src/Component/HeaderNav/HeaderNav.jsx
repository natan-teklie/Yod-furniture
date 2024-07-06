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
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/product'>product</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/contact'>Contact</Link> </li>
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
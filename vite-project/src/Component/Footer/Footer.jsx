
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';




import './Footer.css'

const Footer = () => {
 
  return (
  <>
  
  <footer>
    <div className="container">
        <div className="row">
            <div className="footer-col">
            <h4>YodFurniture</h4>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
            </div>
            <div className="footer-col">
            <h4>Properties</h4>
                    <ul>
                        <li><a href="">latest</a></li>
                        <li><a href="">Modern</a></li>
                        <li><a href="">High-Quality</a></li>
                        {/* <li><a href="">Gallery</a></li> */}
                        <li><a href="">Experianced</a></li>
                    </ul>
            </div>
            <div className="footer-col">
            <h4>Services</h4>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Office</a></li>
                        <li><a href="">Outdoor</a></li>
                        <li><a href="">Cafe/Restuarant</a></li>
                    </ul>
            </div>
            <div className="footer-col">
            <h4>Newsletter</h4>
                   <form action="">
                    <input type="text" placeholder="your name" className="inputName"/>
                    <input type="email" placeholder="enter company email" className="inputEmail"/>
                    <input type="submit" value="submit" className="inputSubmit"/>
                   </form>
                   
            </div>
        </div>
        <hr />



        <div className="row">
            <div className="col"><p>&copy; 2024 Yod Furniture. All Rights Reserved.</p></div>
         
            <div className="socialIcons">
            {/* <style>
        {`
          .faTwitter {
            font-family: sans-serif;
          }
          .t::before {
            content: "𝕏";
            font-size: 1.2em;
            color:"white"
          }
        `}
      </style> */}
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} className="f" />
      </a>
      <a href="#" className='check'>
      <FontAwesomeIcon icon={faXTwitter} className='t'/>
      </a>
      <a href="#">
      <FontAwesomeIcon icon={faInstagram} className="i" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} className="l" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faYoutube} className="y" />
      </a>
   
    </div>
        </div>



    </div>
  </footer>
  
  
  </>
    
    
  )
}

export default Footer
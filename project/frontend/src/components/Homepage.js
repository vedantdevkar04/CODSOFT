import React from 'react';
import './styles.css';
import { useState } from 'react';
 


 
import {Link} from 'react-router-dom' ;
import PaymentForm from './PaymentForm';
 

function Homepage() {
 
 
  
    const [showPaymentBox, setShowPaymentBox] = useState(false);
  
    const handleBuyNowClick = () => {
      setShowPaymentBox(true );
    };
  
    const handleCloseClick = () => {
      setShowPaymentBox(false);
    };

    
      const [selectedProduct, setSelectedProduct] = useState('airforce'); // Default selected product
    
      const handleMenuItemClick = (productId) => {
        setSelectedProduct(productId);
      }

  
  return (
    <>
       
      <div id="nav">
        <div className="navTop">
          <div className="navItem"></div>
          <div className="navItem">
            <div className="search">
              <input type="text" placeholder="Search..." className="searchInput" />
              <img src="./img/search.png" width="20" height="20" alt="" className="searchIcon" />
            </div>
          </div> 
          <div className="navItem">
            
            <Link to ='/signup'> 
              <button className="limitedOfferone">SIGN UP</button>
            </Link>
             
            <Link to='/login'>
              <button className="limitedOffertwo">LOG IN</button>
            </Link>
            
          </div>
        </div>
        <div className="navBottom">
          <h3  className={`menuItem ${selectedProduct === 'airforce' ? 'selected' : ''}`} onClick={() => handleMenuItemClick('airforce')}>ZARA </h3>
          <h3 className= {`menuItem ${selectedProduct === 'jordan' ? 'selected' : ''}`} onClick={() => handleMenuItemClick('jordan')}>ZARA </h3>
          <h3 className={`menuItem ${selectedProduct === 'blazer' ? 'selected' : ''}`} onClick={() => handleMenuItemClick('blazer')}>H&M</h3>
          <h3 className={`menuItem ${selectedProduct === 'crater' ? 'selected' : ''}`} onClick={() => handleMenuItemClick('crater')}>GUCCI</h3>
          <h3 className={`menuItem ${selectedProduct === 'hippie' ? 'selected' : ''}`} onClick={() => handleMenuItemClick('hippie')}>LOUIS VUITTON</h3>
        </div>
      </div>
    
        
        <div className="sliderWrapper">
        {selectedProduct === 'airforce' && (
          <div id="airforce" className="sliderItem">
            <img src="./img/brownv.jpg" alt="gendaswami" className="sliderImg" />
            <h1 className="sliderTitle"><t/>    ZARA <br />       VINTAGE<br /> VARSITY JACKET</h1>
            <h2 className="sliderPrice">₹9,999/-</h2>
            <a href="#product">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>)}
          {selectedProduct === 'jordan' && (
          <div id ="jordan"className="sliderItem">
            <img src='./img/bluev.jpg' alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">ZARA VARSITY JACKET<br /> NEW<br /> SEASON</h1>
            <h2 id="vedant" className="sliderPrice">₹21,999/-</h2>
            <a href="#product">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>)}
          {selectedProduct === 'blazer' && (
          <div className="sliderItem">
            <img src='./img/greenv.jpg' alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">H&M VARSITY JACKET<br /> NEW<br /> SEASON</h1>
            <h2 className="sliderPrice">₹17,999/-</h2>
            <a href="#product">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>)}
          {selectedProduct === 'crater' && (
          <div id ="crater"className="sliderItem">
            <img src="./img/blackv.jpeg" alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">GUCCI VARSITY JACKET<br /> NEW<br /> SEASON</h1>
            <h2 className="sliderPrice">₹12,999/-</h2>
            <a href="#product">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>)}
          <div className="sliderItem">
            <img src="./img/blackv.jpeg" alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">LOUIS VUITTON<br /> NEW<br /> SEASON</h1>
            <h2 className="sliderPrice">₹14,999/-</h2>
            <a href="#product">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>
        </div>
       
      
      
        {selectedProduct === 'jordan' && (
    <div class="product" id="product">
      
        <img src="./img/bluev.jpg" alt="" class="productImg"/>
        <div class="productDetails">
            <h1 class="productTitle">AIR FORCE</h1>
            <h2 class="productPrice">₹9,999/-</h2>
            <p class="productDesc">Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda
                dolorum
                doloremque sapiente aliquid aperiam.</p>
            <div class="colors">
                <div class="color"></div>
                <div class="color"></div>
            </div>
            <div class="sizes">
                <div class="size">42</div>
                <div class="size">43</div>
                <div class="size">44</div>
            </div>
            
            <button onClick={handleBuyNowClick}>Buy Now</button>
            {showPaymentBox && (
        <PaymentForm/>
      )}

       
            
        </div>
        
    </div>)}
    {selectedProduct === 'airforce' && (
    <div class="product" id="product">
      
        <img src="./img/brownv.jpg" alt="" class="productImg"/>
        <div class="productDetails">
            <h1 class="productTitle">AIR FORCE</h1>
            <h2 class="productPrice">₹9,999/-</h2>
            <p class="productDesc">Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda
                dolorum
                doloremque sapiente aliquid aperiam.</p>
            <div class="colors">
                <div class="color"></div>
                <div class="color"></div>
            </div>
            <div class="sizes">
                <div class="size">42</div>
                <div class="size">43</div>
                <div class="size">44</div>
            </div>
            
            <button onClick={handleBuyNowClick}>Buy Now</button>

            {showPaymentBox && (
        <PaymentForm/>
      )}
            
        </div>
        
    </div>)}
    {selectedProduct === 'blazer' && (
    <div class="product" id="product">
      
        <img src="./img/greenv.jpg" alt="" class="productImg"/>
        <div class="productDetails">
            <h1 class="productTitle">AIR FORCE</h1>
            <h2 class="productPrice">₹9,999/-</h2>
            <p class="productDesc">Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda
                dolorum
                doloremque sapiente aliquid aperiam.</p>
            <div class="colors">
                <div class="color"></div>
                <div class="color"></div>
            </div>
            <div class="sizes">
                <div class="size">42</div>
                <div class="size">43</div>
                <div class="size">44</div>
            </div>
            
            <button onClick={handleBuyNowClick}>Buy Now</button>

            {showPaymentBox && (
        <PaymentForm/>
      )}
            
        </div>
        
    </div>)}
    {selectedProduct === 'hippie' && (
    <div class="product" id="product">
      
        <img src="./img/blackv.jpeg" alt="" class="productImg"/>
        <div class="productDetails">
            <h1 class="productTitle">LOUIS VUITTON</h1>
            <h2 class="productPrice">₹9,999/-</h2>
            <p class="productDesc">Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda
                dolorum
                doloremque sapiente aliquid aperiam.</p>
            <div class="colors">
                <div class="color"></div>
                <div class="color"></div>
            </div>
            <div class="sizes">
                <div class="size">42</div>
                <div class="size">43</div>
                <div class="size">44</div>
            </div>
            
            <button onClick={handleBuyNowClick}>Buy Now</button>

            {showPaymentBox && (
        <PaymentForm/>
      )}
            
        </div>
        
    </div>)}
            
       
    {selectedProduct === 'crater' && (
    <div class="product" id="product">
      
        <img src="./img/brownv.jpg" alt="" class="productImg"/>
        <div class="productDetails">
            <h1 class="productTitle">LOUIS VUITTON</h1>
            <h2 class="productPrice">₹9,999/-</h2>
            <p class="productDesc">Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda
                dolorum
                doloremque sapiente aliquid aperiam.</p>
            <div class="colors">
                <div class="color"></div>
                <div class="color"></div>
            </div>
            <div class="sizes">
                <div class="size">42</div>
                <div class="size">43</div>
                <div class="size">44</div>
            </div>
            
            <button onClick={handleBuyNowClick}>Buy Now</button>

            {showPaymentBox && (
        <PaymentForm/>
      )}
            
        </div>
        
    </div>)}

    {showPaymentBox && (
        <PaymentForm/>
      )}
            
    
    <div class="features">
        <div class="feature">
            <img src="./img/shipping.png" alt="" class="featureIcon"/>
            <span class="featureTitle">FREE SHIPPING</span>
            <span class="featureDesc">Free worldwide shipping on all orders.</span>
        </div>
        <div class="feature">
            <img class="featureIcon" src="./img/return.png" alt=""/>
            <span class="featureTitle">30 DAYS RETURN</span>
            <span class="featureDesc">No question return and easy refund in 14 days.</span>
        </div>
        <div class="feature">
            <img class="featureIcon" src="./img/gift.png" alt=""/>
            <span class="featureTitle">GIFT CARDS</span>
            <span class="featureDesc">Buy gift cards and use coupon codes easily.</span>
        </div>
        <div class="feature">
            <img class="featureIcon" src="./img/contact.png" alt=""/>
            <span class="featureTitle">CONTACT US!</span>
            <span class="featureDesc">Keep in touch via email and support system.</span>
        </div>
    </div>

    <div class="gallery">
        <div class="galleryItem">
            <h1 class="galleryTitle">Be Yourself!</h1>
            <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="galleryImg"/>
        </div>
        <div class="galleryItem">
            <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500/"
                alt="" class="galleryImg"/>
            <h1 class="galleryTitle">This is the First Day of Your New Life</h1>
        </div>
        <div class="galleryItem">
            <h1 class="galleryTitle">Just Do it!</h1>
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500/"
                alt="" class="galleryImg"/>
        </div>
    </div>
    <div class="newSeason">
        <div class="nsItem">
            <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500/"
                alt="" class="nsImg"/>
        </div>
        <div class="nsItem">
            <h3 class="nsTitleSm">WINTER NEW ARRIVALS</h3>
            <h1 class="nsTitle">New Season</h1>
            <h1 class="nsTitle">New Collection</h1>
            <a href="#nav">
                <button class="nsButton">CHOOSE YOUR STYLE</button>
            </a>
        </div>
        <div class="nsItem">
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500/"
                alt="" class="nsImg"/>
        </div>
    </div>
    <footer>
        <div class="footerLeft">
            <div class="footerMenu">
                <h1 class="fMenuTitle">About Us</h1>
                <ul class="fList">
                    <li class="fListItem">Company</li>
                    <li class="fListItem">Contact</li>
                    <li class="fListItem">Careers</li>
                    <li class="fListItem">Affiliates</li>
                    <li class="fListItem">Stores</li>
                </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle">Useful Links</h1>
                <ul class="fList">
                    <li class="fListItem">Support</li>
                    <li class="fListItem">Refund</li>
                    <li class="fListItem">FAQ</li>
                    <li class="fListItem">Feedback</li>
                    <li class="fListItem">Stories</li>
                </ul>
            </div>
            <div class="footerMenu">
                <h1 class="fMenuTitle">Products</h1>
                <ul class="fList">
                    <li class="fListItem">Air Force</li>
                    <li class="fListItem">Air Jordan</li>
                    <li class="fListItem">Blazer</li>
                    <li class="fListItem">Crater</li>
                    <li class="fListItem">Hippie</li>
                </ul>
            </div>
        </div>
        <div class="footerRight">
            <div class="footerRightMenu">
                <h1 class="fMenuTitle">Subscribe to our newsletter</h1>
                <div class="fMail">
                    <input type="text" placeholder="your@email.com" class="fInput"/>
                    <button class="fButton">Join!</button>
                </div>
            </div>
            <div class="footerRightMenu">
                <h1 class="fMenuTitle">Follow Us</h1>
                <div class="fIcons">
                    <img src="./img/facebook.png" alt="" class="fIcon"/>
                    <img src="./img/twitter.png" alt="" class="fIcon"/>
                    <img src="./img/instagram.png" alt="" class="fIcon"/>
                    <img src="./img/whatsapp.png" alt="" class="fIcon"/>
                </div>
            </div>
            <div class="footerRightMenu">
                <span class="copyright">@Lama Dev. All rights reserved. 2022.</span>
            </div>
        </div>
    </footer>

      <script src="./app.js"></script>
    </>
  );
}

export default Homepage;

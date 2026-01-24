import React from 'react'
import { 
  CreditCard, 
  Paypal, 
  CreditCard2BackFill, 
  CreditCard2Front, 
  Facebook,
  Twitter,
  Instagram, 
  Pinterest
} from 'react-bootstrap-icons';


const Footer = () => {
  return (
    <div>
		{/* <!-- NEWSLETTER --> */}
		<div id="newsletter" className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">
					<div className="col-md-12">
						<div className="newsletter">
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<form>
								<input className="input" type="email" placeholder="Enter Your Email"/>
								<button className="newsletter-btn"><i className="fa fa-envelope"></i> Subscribe</button>
							</form>
							<ul className="newsletter-follow">
								<li className=''>
									<a href="#" className='pl-4 pt-5 text-2xl'><Facebook/></a>
								</li>
								<li>
									<a href="#" className='pl-4 pt-5 text-2xl'><Twitter/></a>
								</li>
								<li>
									<a href="#" className='pl-4 pt-5 text-2xl'><Instagram/></a>
								</li>
								<li>
									<a href="#" className='pl-4 pt-5 text-2xl'><Pinterest/></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /NEWSLETTER --> */}
      {/* <!-- FOOTER --> */}
		<footer id="footer">
			{/* <!-- top footer --> */}
			<div className="section">
				{/* <!-- container --> */}
				<div className="container">
					{/* <!-- row --> */}
					<div className="row">
						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">About Us</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
								<ul className="footer-links">
									<li><a href="#"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
									<li><a href="#"><i className="fa fa-phone"></i>+021-95-51-84</a></li>
									<li><a href="#"><i className="fa fa-envelope-o"></i>email@email.com</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Categories</h3>
								<ul className="footer-links">
									<li><a href="#">Hot deals</a></li>
									<li><a href="#">Laptops</a></li>
									<li><a href="#">Smartphones</a></li>
									<li><a href="#">Cameras</a></li>
									<li><a href="#">Accessories</a></li>
								</ul>
							</div>
						</div>

						<div className="clearfix visible-xs"></div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Information</h3>
								<ul className="footer-links">
									<li><a href="#">About Us</a></li>
									<li><a href="#">Contact Us</a></li>
									<li><a href="#">Privacy Policy</a></li>
									<li><a href="#">Orders and Returns</a></li>
									<li><a href="#">Terms & Conditions</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Service</h3>
								<ul className="footer-links">
									<li><a href="#">My Account</a></li>
									<li><a href="#">View Cart</a></li>
									<li><a href="#">Wishlist</a></li>
									<li><a href="#">Track My Order</a></li>
									<li><a href="#">Help</a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /row --> */}
				</div>
				{/* <!-- /container --> */}
			</div>
			{/* <!-- /top footer --> */}

			{/* <!-- bottom footer --> */}
			<div id="bottom-footer" className="section">
				<div className="container">
					{/* <!-- row --> */}
					<div className="row">
						<div className="col-md-12 text-center">
							<ul className="footer-payments">
								{/* <li><a href="#"><i className="fa fa-cc-visa"></i></a></li> */}
								<li><a href="#"><CreditCard size={28} /></a></li>
								{/* <li><a href="#"><i className="fa fa-cc-paypal"></i></a></li> */}
								<li><a href="#"><CreditCard2BackFill size={28} /></a></li>
								<li><a href="#"><Paypal size={28} /></a></li>
								<li><a href="#"><CreditCard2Front size={28} /></a></li>
							</ul>
							<span className="copyright">
								 <a target="_blank" href="https://www.templateshub.net">Templates Hub</a>
							</span>
						</div>
					</div>
						{/* <!-- /row --> */}
				</div>
				{/* <!-- /container --> */}
			</div>
			{/* <!-- /bottom footer --> */}
		</footer>
		{/* <!-- /FOOTER --> */}
    </div>
  )
}

export default Footer

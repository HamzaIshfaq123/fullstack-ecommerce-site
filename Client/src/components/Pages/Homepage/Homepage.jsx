import React from 'react'
// images
import product1 from '../../../assets/images/product01.png'
import product2 from '../../../assets/images/product02.png'
import product3 from '../../../assets/images/product03.png'
import product4 from '../../../assets/images/product04.png'
import product5 from '../../../assets/images/product05.png'
import product6 from '../../../assets/images/product06.png'
import product7 from '../../../assets/images/product07.png'
import product8 from '../../../assets/images/product08.png'
import product9 from '../../../assets/images/product09.png'
import shop1 from '../../../assets/images/shop01.png'
import shop2 from '../../../assets/images/shop02.png'
import shop3 from '../../../assets/images/shop03.png'

import {ArrowRightCircleFill} from "react-bootstrap-icons"

import { useState } from 'react';
import { StarFill, Heart, Shuffle, Eye, CartDash } from 'react-bootstrap-icons';

const categories = ['Laptops', 'Smartphones', 'Cameras', 'Accessories'];

const Homepage = () => {
    const [activeTab, setActiveTab] = useState('Laptops');
    const shops = [
    { id: 1, name: "Laptop", img: "./img/shop01.png" },
    { id: 2, name: "Accessories", img: "./img/shop03.png" },
    { id: 3, name: "Cameras", img: "./img/shop02.png" },
  ];
  return (
    <div>
      {/* NAVIGATION */}
<nav id="navigation" className="bg-white  border-gray-100">
  <div className="container  mx-auto px-4">
    <div id="responsive-nav" className=''>
      {/* 
          flex-row: keeps items horizontal
          space-x-8: adds consistent gap between links
          uppercase: common styling for this template
      */}
      <ul className="text-xl flex flex-row justify-center items-center space-x-8 uppercase tracking-tight">
        
        {/* Active Link: Red text and red bottom border */}
        <li className="relative group text-[#D10024] font-semibold">
          <a href="#" className="after:content-[''] after:absolute after:left-0 after:bottom-\[-18px] after:w-full after:h-\[2px] after:bg-[#D10024]">
            <p className=' pt-5'>Home</p> 
          </a>
        </li>

        {/* Regular Links: Gray text that turns red on hover */}
        <li className="text-[#2B2D33] hover:text-[#D10024] transition-colors duration-300">
          <a href="#"><p className='pt-5'>Hot Deals</p></a>
        </li>

        <li className="text-[#2B2D33] hover:text-[#D10024] transition-colors duration-300">
          <a href="#"><p className='pt-5'>Categories</p></a>
        </li>

        <li className="text-[#2B2D33] hover:text-[#D10024] transition-colors duration-300">
          <a href="#"><p className='pt-5'>Laptops</p></a>
        </li>

        <li className="text-[#2B2D33] hover:text-[#D10024] transition-colors duration-300">
          <a href="#"><p className='pt-5'>Smartphones</p>
          </a>
        </li>

        <li className="text-[#2B2D33] hover:text-[#D10024] transition-colors duration-300">
          <a href="#"><p className='pt-5'>Cameras</p></a>
        </li>

        <li className="text-[#2B2D33] hover:text-[#D10024] transition-colors duration-300">
          <a href="#"><p className='pt-5'>Accessories</p></a>
        </li>

      </ul>
    </div>
  </div>
</nav>

		{/* <!-- SECTION --> */}
		 <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Responsive Grid: 1 col on mobile, 2 on small tablets, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {shops.map((shop) => (
            <div key={shop.id} className="relative overflow-hidden group bg-[#E4E7ED] h-64">
  
  {/* The Product Image - Stays in the background */}
  <img 
    src={shop1} 
    alt={shop.name} 
    className="absolute right-0 bottom-0 w-2/3 h-full object-contain transition-transform duration-500 group-hover:scale-110" 
  />

  {/* RED TRIANGLE OVERLAY - This creates the slanted shape */}
  <div 
    className="absolute inset-0 bg-[#D10024] opacity-90 transition-all duration-500 group-hover:bg-[#1E1F29]"
    style={{
      // This creates a triangle/polygon from the top-left
      clipPath: "polygon(0 0, 100% 0, 20% 100%, 0% 100%)" 
    }}
  ></div>

  {/* TEXT CONTENT - Placed inside the triangle area */}
  <div className="absolute inset-0 p-8 flex flex-col justify-center z-20">
    <h3 className="text-2xl font-bold text-white leading-tight uppercase">
      {shop.name}<br />Collection
    </h3>
    <a 
      href="#" 
      className="mt-4 flex items-center gap-2 text-white font-bold uppercase text-xs hover:underline"
    >
      Shop now 
      <ArrowRightCircleFill className="text-white" />
    </a>
  </div>
  
</div>
          ))}

        </div>
      </div>
    </div>
		{/* <!-- /SECTION --> */}

		{/* <!-- SECTION --> */}
		<div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        
        {/* SECTION TITLE & NAV */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#E4E7ED] mb-8 pb-2">
          <h3 className="text-2xl font-bold uppercase text-[#1E1F29]">New Products</h3>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveTab(cat)}
                    className={`text-sm font-bold uppercase transition-all relative pb-2
                      ${activeTab === cat 
                        ? 'text-[#D10024] after:content-[""] after:absolute after:bottom-\[-2px] after:left-0 after:w-full after:h-\[2px] after:bg-[#D10024]' 
                        : 'text-[#8D99AE] hover:text-[#D10024]'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* SINGLE PRODUCT CARD */}
          <div className="group relative border border-[#E4E7ED] p-4 transition-all hover:shadow-lg hover:border-[#D10024]">
            
            {/* PRODUCT IMAGE */}
            <div className="relative h-64 flex items-center justify-center overflow-hidden">
              <img 
                src={product1} 
                alt="Product" 
                className="max-h-full transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute top-2 right-2 flex flex-col gap-1">
                <span className="bg-[#D10024] text-white text-[10px] px-2 py-1 font-bold">-30%</span>
                <span className="bg-[#1E1F29] text-white text-[10px] px-2 py-1 font-bold uppercase">New</span>
              </div>
            </div>

            {/* PRODUCT BODY */}
            <div className="text-center mt-4">
              <p className="text-[10px] uppercase text-[#8D99AE] mb-1">Category</p>
              <h3 className="text-sm font-bold uppercase hover:text-[#D10024] transition-colors mb-2">
                <a href="#">Product Name Goes Here</a>
              </h3>
              <h4 className="text-[#D10024] font-bold text-lg">
                $980.00 <del className="text-[#8D99AE] font-normal text-sm ml-2">$990.00</del>
              </h4>

              {/* RATING */}
              <div className="flex justify-center gap-1 my-2 text-[#D10024]">
                <StarFill size={12} /><StarFill size={12} /><StarFill size={12} /><StarFill size={12} /><StarFill size={12} />
              </div>

              {/* ACTION BUTTONS (Appear on hover) */}
              <div className="flex justify-center gap-4 mt-4">
                <button className="relative group/tool">
                  <Heart className="hover:text-[#D10024]" />
                  <span className="absolute bottom-full mb-2 hidden group-hover/tool:block bg-[#1E1F29] text-white text-[10px] py-1 px-2 rounded">wishlist</span>
                </button>
                <button className="relative group/tool">
                  <Shuffle className="hover:text-[#D10024]" />
                  <span className="absolute bottom-full mb-2 hidden group-hover/tool:block bg-[#1E1F29] text-white text-[10px] py-1 px-2 rounded">compare</span>
                </button>
                <button className="relative group/tool">
                  <Eye className="hover:text-[#D10024]" />
                  <span className="absolute bottom-full mb-2 hidden group-hover/tool:block bg-[#1E1F29] text-white text-[10px] py-1 px-2 rounded">quick view</span>
                </button>
              </div>
            </div>

            {/* ADD TO CART BUTTON (Slide up effect) */}
            <div className="absolute inset-x-0 bottom-\[-50px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300 bg-[#1E1F29] p-2 z-10">
              <button className="w-full text-white uppercase text-xs font-bold py-2 flex items-center justify-center gap-2 hover:text-[#D10024]">
                <CartDash size={16} /> Add to Cart
              </button>
            </div>

          </div>
          {/* END SINGLE PRODUCT */}

        </div>
      </div>
    </div>
		{/* <!-- /SECTION --> */}

		{/* <!-- HOT DEAL SECTION --> */}
		<div id="hot-deal" className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">
					<div className="col-md-12">
						<div className="hot-deal">
							<ul className="hot-deal-countdown">
								<li>
									<div>
										<h3>02</h3>
										<span>Days</span>
									</div>
								</li>
								<li>
									<div>
										<h3>10</h3>
										<span>Hours</span>
									</div>
								</li>
								<li>
									<div>
										<h3>34</h3>
										<span>Mins</span>
									</div>
								</li>
								<li>
									<div>
										<h3>60</h3>
										<span>Secs</span>
									</div>
								</li>
							</ul>
							<h2 className="text-uppercase">hot deal this week</h2>
							<p>New Collection Up to 50% OFF</p>
							<a className="primary-btn cta-btn" href="#">Shop now</a>
						</div>
					</div>
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /HOT DEAL SECTION --> */}

		{/* <!-- SECTION --> */}
		<div className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">

					{/* <!-- section title --> */}
					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">Top selling</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									<li className="active"><a data-toggle="tab" href="#tab2">Laptops</a></li>
									<li><a data-toggle="tab" href="#tab2">Smartphones</a></li>
									<li><a data-toggle="tab" href="#tab2">Cameras</a></li>
									<li><a data-toggle="tab" href="#tab2">Accessories</a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /section title --> */}

					{/* <!-- Products tab & slick --> */}
					<div className="col-md-12">
						<div className="row">
							<div className="products-tabs">
								{/* <!-- tab --> */}
								<div id="tab2" className="tab-pane fade in active">
									<div >
										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src={product6} alt=""/>
												<div className="product-label">
													<span className="sale">-30%</span>
													<span className="new">NEW</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><a href="#">product name goes here</a></h3>
												<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src={product7} alt=""/>
												<div className="product-label">
													<span className="new">NEW</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><a href="#">product name goes here</a></h3>
												<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star-o"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src={product8} alt=""/>
												<div className="product-label">
													<span className="sale">-30%</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><a href="#">product name goes here</a></h3>
												<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src={product9} alt=""/>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><a href="#">product name goes here</a></h3>
												<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src="./img/product01.png" alt=""/>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><a href="#">product name goes here</a></h3>
												<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										{/* <!-- /product --> */}
									</div>
									<div ></div>
								</div>
								{/* <!-- /tab --> */}
							</div>
						</div>
					</div>
					{/* <!-- /Products tab & slick --> */}
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /SECTION --> */}

		{/* <!-- SECTION --> */}
		<div className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">
					<div className="col-md-4 col-xs-6">
						<div className="section-title">
							<h4 className="title">Top selling</h4>
							<div className="section-nav">
								<div  ></div>
							</div>
						</div>

						<div  >
							<div>
								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product07.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product08.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product09.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- product widget --> */}
							</div>

							<div>
								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product01.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product02.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product03.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- product widget --> */}
							</div>
						</div>
					</div>

					<div className="col-md-4 col-xs-6">
						<div className="section-title">
							<h4 className="title">Top selling</h4>
							<div className="section-nav">
								<div></div>
							</div>
						</div>

						<div >
							<div>
								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product04.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product05.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product06.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- product widget --> */}
							</div>

							<div>
								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product07.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product08.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product09.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- product widget --> */}
							</div>
						</div>
					</div>

					<div className="clearfix visible-sm visible-xs"></div>

					<div className="col-md-4 col-xs-6">
						<div className="section-title">
							<h4 className="title">Top selling</h4>
							<div className="section-nav">
								<div></div>
							</div>
						</div>

						<div>
							<div>
								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product01.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product02.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product03.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- product widget --> */}
							</div>

							<div>
								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product04.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product05.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product06.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="#">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- product widget --> */}
							</div>
						</div>
					</div>

				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /SECTION --> */}

    </div>
  )
}

export default Homepage

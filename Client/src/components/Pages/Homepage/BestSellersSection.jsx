import React, {useState, useEffect, useRef} from 'react'
import { StarFill, Heart, Shuffle, Eye, CartDash } from 'react-bootstrap-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'; // Or use your template arrows
import { Link } from 'react-router-dom';

const BestSellersSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTopSelling = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/products/top-selling');
                
                // Fetch doesn't throw error on 404/500, so we check manually
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        getTopSelling();
    }, []);

    // product widget for the vertically displayed items
    const ProductWidgetColumn = ({ title, data }) => {
  // Create a reference to control the slider with custom buttons
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // We show one "group" of 3 products at a time
    slidesToScroll: 1,
    // arrows: false, // Hide default arrows to use your custom ones
  };

  // Chunk your data into groups of 3 for the slider
  // If you have 9 products, this creates 3 slides with 3 products each
  const chunks = [];
  for (let i = 0; i < data.length; i += 3) {
    chunks.push(data.slice(i, i + 3));
  }

  return (
    <div className="mb-10">
      {/* Header with Arrows */}
      <div className="flex justify-between items-center border-b-2 border-gray-100 pb-3 mb-6">
        <h4 className="text-lg font-bold uppercase text-[#1E1F29]">{title}</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => sliderRef.current.slickPrev()}
            className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:bg-[#D10024] hover:text-white transition-all"
          >
            <ChevronLeft size={14} />
          </button>
          <button 
            onClick={() => sliderRef.current.slickNext()}
            className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:bg-[#D10024] hover:text-white transition-all"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      
      {/* The Slider */}
      <Slider ref={sliderRef} {...settings}>
        {chunks.map((chunk, slideIndex) => (
          <div key={slideIndex} className="outline-none">
            <div className="flex flex-col gap-6">
              {chunk.map((product) => (
                <div key={product._id} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-20 h-20 shrink-0 overflow-hidden bg-gray-50 border border-gray-100">
                    <img 
                      src={product.images?.[0]} 
                      alt={product.name} 
                      className="w-full h-full object-contain transition-transform group-hover:scale-110" 
                    />
                  </div>
                  <div className="grow">
                    <p className="text-[10px] text-gray-400 uppercase">
                      {product.category?.name || "General"}
                    </p>
                    <Link to={`/product/${product._id}`}>
                    <h3 className="text-sm font-bold uppercase mb-1 hover:text-[#D10024] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
   {/* <h3 className="hover:text-[#D10024] cursor-pointer">{product.name}</h3> */}
                    </Link>
                    <h4 className="text-sm font-bold text-[#D10024]">${product.price}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
// Only render the section if we have products
if (products.length === 0) return null;
  return (
    <div>
      {/* <!-- HOT DEAL SECTION --> */}
      <div className="bg-[#F3F5F7] py-16 relative overflow-hidden mb-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Image: Laptop */}
            <div className="hidden lg:block w-1/3 transform -rotate-12 translate-x-[-10%]">
              <img src="/images/product02.png" alt="Laptop" className="w-full h-auto object-contain" />
            </div>
      
            {/* Center Content: Hot Deal */}
            <div className="text-center flex-1 z-10">
              <ul className="flex justify-center gap-4 mb-8">
                {[
                  { val: "02", label: "Days" },
                  { val: "10", label: "Hours" },
                  { val: "34", label: "Mins" },
                  { val: "60", label: "Secs" }
                ].map((item, index) => (
                  <li key={index}>
                    <div className="bg-[#D10024] w-20 h-20 rounded-full flex flex-col items-center justify-center text-white shadow-lg">
                      <h3 className="text-xl font-bold leading-none">{item.val}</h3>
                      <span className="text-[10px] uppercase tracking-tighter">{item.label}</span>
                    </div>
                  </li>
                ))}
              </ul>
      
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                hot deal this week
              </h2>
              <p className="text-gray-600 uppercase tracking-widest text-sm mb-8">
                New Collection Up to 50% OFF
              </p>
              
              <button className="bg-[#D10024] text-white px-10 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black transition-colors">
                Shop now
              </button>
            </div>
      
            {/* Right Image: Headphones */}
            <div className="hidden lg:block w-1/3 transform translate-x-[10%]">
              <img src="/images/product03.png" alt="Headphones" className="w-full h-auto object-contain" />
            </div>
      
          </div>
        </div>
      </div>
      {/* Hot Deals Section */}
      
            {/* <!-- SECTION --> */}
            <div className="section">
                {/* <!-- container --> */}
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row">
      
                        {/* <!-- section title --> */}
                        <div className="w-full px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b-2 border-gray-200 pb-4 mb-8">
          {/* Section Title */}
          <h3 className="text-2xl font-bold uppercase text-[#1E1F29] mb-4 md:mb-0 tracking-tight">
            Top selling
          </h3>
      
          {/* Section Navigation */}
          <nav>
            <ul className="flex flex-wrap items-center gap-4 md:gap-8">
              <li className="relative group">
                <a 
                  href="#tab2" 
                  className="text-sm font-semibold uppercase transition-colors text-[#D10024] after:absolute after:bottom-/[-18px] after:left-0 after:w-full after:h-/[2px] after:bg-[#D10024]"
                >
                  Laptops
                </a>
              </li>
              <li>
                <a href="#tab2" className="text-sm font-semibold uppercase text-gray-500 hover:text-[#D10024] transition-colors">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="#tab2" className="text-sm font-semibold uppercase text-gray-500 hover:text-[#D10024] transition-colors">
                  Cameras
                </a>
              </li>
              <li>
                <a href="#tab2" className="text-sm font-semibold uppercase text-gray-500 hover:text-[#D10024] transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
                        {/* <!-- /section title --> */}
      
                        {/* <!-- Products tab & slick --> */}
                        <div className="container mx-auto px-4 py-8">
            {/* Grid wrapper: 1 col on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* START SINGLE PRODUCT ITEM */}
              {products.map((product) => (
              <div key={product._id} className="group relative border border-gray-200 p-4 transition-all hover:border-[#D10024] bg-white">
                
                {/* Product Image & Labels */}
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={product.images[0]} // Replace with your dynamic image variable
                    alt="Product Name" 
                    className="w-full h-auto object-cover" 
                  />
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    <span className="bg-[#D10024] text-white text-[10px] font-bold px-2 py-1 border border-[#D10024]">
                      -30%
                    </span>
                    <span className="bg-white text-[#D10024] text-[10px] font-bold px-2 py-1 border border-[#D10024]">
                      NEW
                    </span>
                  </div>
                </div>
      
                {/* Product Body */}
                <div className="text-center">
                  <p className="text-xs text-gray-400 uppercase mb-1">Category</p>
                  <h3 className="text-sm font-bold uppercase mb-2 hover:text-[#D10024] cursor-pointer">
                    <Link to={`/product/${product._id}`}>
   {product.name}
</Link>
                    {/* <a href="#">{product.name}</a> */}
                  </h3>
                  <h4 className="text-[#D10024] font-bold text-lg mb-2">
                    {product.discount_pct} <del className="text-gray-400 font-normal text-sm ml-1">{product.old_price}</del>
                  </h4>
      
                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-4 text-[#D10024] text-xs">
                    {/* <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar /> */}
                    {/* <FaRegStar className="text-gray-300" /> */}
                  </div>
      
                  {/* Quick Action Buttons */}
                  <div className="flex justify-center gap-4 text-gray-700 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <button className="hover:text-[#D10024] transition-colors"></button>
                    <button className="hover:text-[#D10024] transition-colors"></button>
                    <button className="hover:text-[#D10024] transition-colors"></button>
                  </div>
                </div>
      
                {/* Add to Cart - Slide up effect with exit fix */}
                <div className="absolute inset-x-0 bottom-/[-50px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 bg-[#1E1F29] p-2 z-10 transition-none">
                  <button className="w-full text-white! uppercase text-xs font-bold py-2 flex items-center justify-center gap-2 hover:text-[#D10024] transition-colors">
                    <CartDash size={14} /> add to cart
                  </button>
                </div>
              </div>
              ))}
              {/* END SINGLE PRODUCT ITEM */}
      
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
             {/* */}
<section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Column 1: Top Selling (Index 0 to 2) */}
      <ProductWidgetColumn 
        title="Top Selling" 
        data={products.slice(0, 6)} 
      />

      {/* Column 2: Top Selling (Index 3 to 5) */}
      <ProductWidgetColumn 
        title="Top Selling" 
        data={products.slice(2, 8)} 
      />

      {/* Column 3: Top Selling (Index 6 to 8) */}
      <ProductWidgetColumn 
        title="Top Selling" 
        data={products.slice(1, 7)} 
      />

    </div>
  </div>
</section>
            {/* <!-- /SECTION --> */}
      
          </div>
    // </div>
  )
}

export default BestSellersSection

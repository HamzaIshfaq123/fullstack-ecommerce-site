import React from 'react'
import { 
  CreditCard, 
  Paypal, 
  CreditCard2BackFill, 
  CreditCard2Front, 
  Facebook,
  Twitter,
  Instagram, 
  Pinterest,
  Map,
  Phone
} from 'react-bootstrap-icons';


const Footer = () => {
  return (
    <div>
		{/* <!-- Main Footer Container --> */}
<footer class="bg-gray-900 text-gray-400">
    {/* <!-- Top Section: Newsletter and Social Icons --> */}
    <div class="bg-white py-10">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
            <div class="flex items-center mb-4 md:mb-0">
                {/* <!-- Placeholder for the white rectangular graphic --> */}
                <div class="w-16 h-20 bg-gray-100 border-2 border-gray-300 mr-6 transform rotate-6"></div>
                <h3 class="text-xl font-semibold text-gray-800">Sign Up for the NEWSLETTER</h3>
            </div>
            <div class="flex flex-col md:flex-row items-center w-full md:w-auto">
                <input type="email" placeholder="Enter Your Email" class="px-4 py-2 border border-gray-300 rounded-l-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                <button class="bg-red-600 text-white px-6 py-2 rounded-r-md hover:bg-red-700 transition duration-300 w-full md:w-auto mt-2 md:mt-0">Subscribe</button>
            </div>
            <div class="flex space-x-4 mt-4 md:mt-0 ml-0 md:ml-4">
                {/* <!-- Replace with actual SVG icons for Facebook, Twitter, Instagram, Pinterest --> */}
                <a href="#" class="text-gray-500 hover:text-gray-700">F</a>
                <a href="#" class="text-gray-500 hover:text-gray-700">T</a>
                <a href="#" class="text-gray-500 hover:text-gray-700">I</a>
                <a href="#" class="text-gray-500 hover:text-gray-700">P</a>
            </div>
        </div>
    </div>

    {/* <!-- Red Separator Line --> */}
    <div class="bg-red-600 h-1 w-full"></div>

    {/* <!-- Bottom Section: Links and Information --> */}
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* <!-- ABOUT US Column --> */}
            <div>
                <h4 class="text-lg font-semibold mb-4 text-white">ABOUT US</h4>
                <p class="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                <p class="text-sm">1734 Stonecoal Road</p>
                <p class="text-sm">+021-95-51-84</p>
            </div>

            {/* <!-- CATEGORIES Column --> */}
            <div>
                <h4 class="text-lg font-semibold mb-4 text-white">CATEGORIES</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white">Hot deals</a></li>
                    <li><a href="#" class="hover:text-white">Laptops</a></li>
                    <li><a href="#" class="hover:text-white">Smartphones</a></li>
                    <li><a href="#" class="hover:text-white">Cameras</a></li>
                    <li><a href="#" class="hover:text-white">Accessories</a></li>
                </ul>
            </div>

            {/* <!-- INFORMATION Column --> */}
            <div>
                <h4 class="text-lg font-semibold mb-4 text-white">INFORMATION</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white">About Us</a></li>
                    <li><a href="#" class="hover:text-white">Contact Us</a></li>
                    <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-white">Orders and Returns</a></li>
                    <li><a href="#" class="hover:text-white">Terms & Conditions</a></li>
                </ul>
            </div>

            {/* <!-- SERVICE Column --> */}
            <div>
                <h4 class="text-lg font-semibold mb-4 text-white">SERVICE</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white">My Account</a></li>
                    <li><a href="#" class="hover:text-white">View Cart</a></li>
                    <li><a href="#" class="hover:text-white">Wishlist</a></li>
                    <li><a href="#" class="hover:text-white">Track My Order</a></li>
                    <li><a href="#" class="hover:text-white">Help</a></li>
                </ul>
            </div>
        </div>
    </div>

    {/* <!-- Bottom Grey Div --> */}
    <div class="bg-gray-800 py-4 w-full">
        {/* <!-- Content for the grey div goes here, e.g., copyright notice --> */}
    </div>
</footer>
    </div>
  )
}

export default Footer

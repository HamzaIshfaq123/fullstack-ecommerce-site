import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Heart, Telephone, Whatsapp } from 'react-bootstrap-icons';

import WhatsAppWidget from '../Widget/WhatsappWidget';

import { toast } from 'sonner';

import { useAuth } from '../../../context/AuthContext';


const ProductDetails = () => {
  
  const { addToCart } = useAuth();

  const handleAddToCart = () => {
  // Extract number from string (e.g., "2 PCS (Save Rs. 300)" -> 2)
  const qtyNumber = parseInt(selectedQty.split(' ')[0]);

  // Construct the object to send to the cart
  const productToCart = {
    _id: product._id,
    name: product.name,
    price: product.price,
    image: product.images?.[0], // Just the first image for the thumbnail
    quantity: qtyNumber
  };

  addToCart(productToCart);
  toast.success("Product has been added to cart");
  // setIsCartOpen(true); // 🚀 Open the side cart automatically!
};

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedQty, setSelectedQty] = useState('1 PC');

  // Fetch product data based on ID
  useEffect(() => {
  const fetchProductDetails = async () => {
    try {
      // 1. Use the environment variable with the fallback
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
      
      const res = await fetch(`${API_URL}/api/products/${id}`);
      
      // 2. Check if the product actually exists
      if (!res.ok) {
        throw new Error("Product not found");
      }

      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error("Error fetching product:", err);
      // Optional: set an error state here to show a "Product not found" UI
    }
  };

  if (id) {
    fetchProductDetails();
  }
}, [id]);

  if (!product) return <div className="p-20 text-center">Loading...</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left: Product Image Section */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden border border-gray-100 rounded-lg">
              <img 
                src={product.images?.[0]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4">
               {product.images?.map((img, i) => (
                 <div key={i} className="w-20 h-20 border cursor-pointer hover:border-[#D10024]">
                    <img src={img} className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-[#1E1F29] mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-[#D10024]">Rs.{product.price.toLocaleString()} PKR</span>
              {product.old_price && (
                <span className="text-gray-400 line-through">Rs.{product.old_price.toLocaleString()} PKR</span>
              )}
              <span className="bg-[#D10024] text-white text-xs px-2 py-1 rounded">Sale</span>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex flex-wrap gap-3">
                {['1 PC', '2 PCS (Save Rs. 300)', '3 PCS (Save Rs. 800)'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedQty(opt)}
                    className={`px-4 py-2 border rounded-full text-sm transition-all ${
                      selectedQty === opt ? 'bg-[#D10024] text-white border-[#D10024]' : 'border-gray-300 hover:border-[#D10024]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <button onClick={handleAddToCart} className="w-full border-2 border-[#D10024] text-[#D10024] font-bold py-3 rounded hover:bg-[#D10024] hover:text-white cursor-pointer transition-colors uppercase tracking-wider">
                Add to cart
              </button>
              <button className="w-full bg-[#D10024] text-white font-bold py-3 rounded hover:bg-[#D10024] cursor-pointer transition-colors uppercase tracking-wider">
                Buy it now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="rotate-180">↩</span> 7 DAYS MONEY BACK GUARANTEE
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 border-t pt-4">
                <span>🚚</span> SHIPPING & DELIVERY TIMES
              </div>
            </div>

            {/* Floating WhatsApp Button Style */}
            {/* <div className="fixed bottom-6 right-6 z-50">
               <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 mb-2">
                 <span className="text-xs font-bold">Chat with us</span>
                 <div className="bg-[#25D366] p-2 rounded-full text-white">
                   <Whatsapp size={20} />
                 </div>
               </div>
            </div> */}
          </div>

        </div>
      </div>
      {/* <WhatsAppWidget/> */}
    </div>
  );
};

export default ProductDetails;
import React from 'react'

import { Link } from 'react-router-dom'

import { useAuth } from '../../../context/AuthContext';

import { useForm } from "react-hook-form";

import { toast } from 'sonner';

import { checkoutSchema } from '../../../../validators/checkoutSchema';

const Checkout = () => {

  const onSubmit = async (formData) => {
    console.log("DEBUG: Frontend Payload before fetch:", formData);
  try {
    // 1. Zod Validation (React Hook Form handles the structure, 
    // but we validate against our schema)
    const validation = checkoutSchema.safeParse(formData);
    if (!validation.success) {
      return toast.error(validation.error.issues[0].message);
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // 2. Prepare Payload
    const orderPayload = {
    shippingAddress: {
      address: formData.address,
      city: formData.city,
      country: formData.country,
      zipCode: formData.zipCode,
      telephone: formData.tel,
    },
    paymentMethod: formData.paymentMethod,
    // CRITICAL: Ensure 'product' is the ID, not the whole object
    orderItems: cart.map(item => ({
      product: item._id, // This MUST match the product ID in your DB
      quantity: item.quantity,
      price: item.price,
      name: item.name
    })),
    totalPrice: subtotal,
  };

    // 3. API Call
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    const response = await fetch(`${API_URL}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderPayload),
      credentials: "include", // Essential for JWT/Cookie auth
    });

    const data = await response.json();

    // 4. Handle Response
    if (response.ok) {
      toast.success("Order placed successfully!");
      // Optional: Clear cart logic here
      // clearCart(); 
      // navigate("/order-success");
    } else {
      toast.error(data.message || "Failed to place order.");
    }
  } catch (error) {
    console.error("Order submission error:", error);
    toast.error("Network error. Please try again later.");
  }
};

  const { cart } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({
    mode: "onChange", // This checks validation as the user types
  });

  // Calculate Subtotal
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // This watches the payment radio buttons
  const selectedPayment = watch("paymentMethod");

  return (
    <div>
      {/* <!-- BREADCRUMB --> */}
<nav className="bg-gray-100 border-b border-gray-200 py-6" aria-label="Breadcrumb">
  <div className="container mx-auto px-4">
    <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">Checkout</h3>
    <ul className="flex items-center space-x-2 text-sm mt-2 text-gray-500">
      <li><Link to="/" className="hover:text-red-600 transition">Home</Link></li>
      <li><span className="mx-2">/</span></li>
      <li className="text-red-600 font-medium">Checkout</li>
    </ul>
  </div>
</nav>

{/* <!-- MAIN SECTION --> */}
<div className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* <!-- LEFT COLUMN: BILLING & SHIPPING --> */}
      <div className="lg:col-span-7 space-y-10">
        
        {/* <!-- Billing Details --> */}
    <section className="billing-details">
    <div className="border-b-2 border-gray-100 pb-4 mb-6">
    <h3 className="text-xl font-bold uppercase">Billing address</h3>
    </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input 
      {...register("firstName", { required: true })}
      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" 
      type="text" 
      placeholder="First Name"
    />
    <input 
      {...register("lastName", { required: true })}
      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" 
      type="text" 
      placeholder="Last Name"
    />
    <input 
      {...register("email", { 
        required: true, 
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Invalid email"
        }
      })}
      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none md:col-span-2" 
      type="email" 
      placeholder="Email"
    />
    <input 
      {...register("address", { required: true })}
      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none md:col-span-2" 
      type="text" 
      placeholder="Address"
    />
    <input 
      {...register("city", { required: true })}
      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" 
      type="text" 
      placeholder="City"
    />
    <input 
      {...register("country", { required: true })}
      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" 
      type="text" 
      placeholder="Country"
    />
    <input 
      {...register("zipCode", { required: true })}
      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" 
      type="text" 
      placeholder="ZIP Code"
    />
    <input 
      {...register("tel", { required: true })}
      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" 
      type="tel" 
      placeholder="Telephone"
    />
    </div>
  </section>  

        {/* <!-- Shipping Details --> */}
        <section className="shipping-details">
          
          <div className="hidden peer-checked:grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
            <input className="w-full px-4 py-3 border border-gray-300 rounded" type="text" placeholder="First Name"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded" type="text" placeholder="Last Name"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded md:col-span-2" type="email" placeholder="Email"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded md:col-span-2" type="text" placeholder="Address"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded" type="text" placeholder="City"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded" type="text" placeholder="Country"/>
          </div>
        </section>

        <textarea className="w-full px-4 py-3 border border-gray-300 rounded h-32 focus:ring-2 focus:ring-red-500 outline-none" placeholder="Order Notes"></textarea>
      </div>

      {/* <!-- RIGHT COLUMN: ORDER SUMMARY --> */}
      <div className="lg:col-span-5">
        <div className="border-2 border-gray-100 p-6 rounded-lg sticky top-6">
          <h3 className="text-xl font-bold uppercase text-center mb-8">Your Order</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between font-bold text-sm uppercase tracking-widest border-b pb-2">
              <span>Product</span>
              <span>Total</span>
            </div>

            {cart.length === 0 ? (
              <p className="text-center text-gray-500 py-10">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item._id} className="flex justify-between items-start text-gray-600 text-sm py-1">
                  {/* Column 1: Quantity and Name */}
                  <div className="flex-1 pr-4">
                    <span className="font-bold text-red-600 mr-2">{item.quantity}x</span>
                    <span className="truncate">{item.name}</span>
                  </div>

                  {/* Column 2: Total for this specific item */}
                  <span className="font-medium whitespace-nowrap">
                    Rs.{(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))
            )}
            
            <div className="flex justify-between text-sm py-2">
              <span>Shipping</span>
              <span className="font-bold text-red-600">FREE</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-4 border-t-2 border-gray-100">
              <span>TOTAL</span>
              <span className="text-red-600">Rs. {subtotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
          <label className="flex items-start cursor-pointer gap-3 p-2 hover:bg-gray-50 rounded">
            <input 
            {...register("paymentMethod", { required: true })}
              type="radio" 
              name="payment" 
              value="bank"
              className="mt-1 w-4 h-4 accent-red-600 cursor-pointer" 
              defaultChecked 
            />
            <div>
              <span className="text-sm font-bold uppercase block">Direct Bank Transfer</span>
              <p className="text-xs text-gray-500 mt-1">
                Transfer funds directly to our bank account.
              </p>
            </div>
          </label>

          <label className="flex items-start cursor-pointer gap-3 p-2 hover:bg-gray-50 rounded">
            <input 
            {...register("paymentMethod", { required: true })}
              type="radio" 
              name="payment" 
              value="cod"
              className="mt-1 w-4 h-4 accent-red-600 cursor-pointer" 
            />
            <div>
              <span className="text-sm font-bold uppercase block">Cash on Delivery</span>
              <p className="text-xs text-gray-500 mt-1">
                Pay with cash upon delivery.
              </p>
            </div>
          </label>
        </div>

          <label className="flex items-start mb-6 cursor-pointer">
            <input {...register("terms", { required: true })} type="checkbox" id="terms" className="mt-1"/>
            <span className="ml-2 text-xs text-gray-600 italic">I've read and accept the <a href="#" className="text-red-600 underline">terms & conditions</a></span>
          </label>

          <button 
              type="submit"
              disabled={!isValid}
              className={`w-full cursor-pointer font-bold py-4 rounded uppercase tracking-widest transition-colors duration-300 ${
                isValid 
                ? "bg-red-600 text-white hover:bg-black" 
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Place Order
            </button>
        </div>
      </div>

    </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Checkout

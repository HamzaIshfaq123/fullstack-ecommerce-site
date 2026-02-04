import React from 'react'
// import { User, LogOut, Package } from 'lucide-react'; // Optional icons from Lucide React


const Account = () => {
    // Assuming user data would be fetched from context/state
  const userDetails = {
    name: 'John Doe', // Not visible in image, but helpful
    country: 'Pakistan',
    addressesCount: 1,
  };
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        
        {/* Left Column: Account & Order History */}
        <div className="flex-1 space-y-16">
          <section>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4 tracking-tight">Account</h1>
            <div className="flex items-center text-sm">
              
              <a href="/account" className="text-gray-800 underline underline-offset-3">Log out</a>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Order history</h2>
            <p className="text-gray-600 text-sm">You haven't placed any orders yet.</p>
          </section>
        </div>

        {/* Right Column: Account Details */}
        <div className="flex-1 md:flex-none md:w-80">
          <section className="bg-white">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Account details</h2>
            <p className="text-gray-800 text-sm mb-4">{userDetails.country}</p>
            <a href="/account" className="text-gray-800 hover:underline text-sm">
              View addresses ({userDetails.addressesCount})
            </a>
          </section>
        </div>

      </div>
    </div>
  )
}

export default Account

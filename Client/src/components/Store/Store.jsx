import React from 'react'

const Store = () => {
  return (
    <div>
      <div id="breadcrumb" className="bg-[#FBFBFC] border-b border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <ul className="flex flex-wrap items-center gap-2 md:gap-4 text-[12px] md:text-sm font-medium uppercase tracking-wide">
            {/* Breadcrumb Item */}
            <li className="flex items-center gap-2 md:gap-4 text-gray-500 after:content-['/'] after:text-gray-300 last:after:content-none">
              <a href="#" className="hover:text-[#D10024] transition-colors">
                Home
              </a>
            </li>

            <li className="flex items-center gap-2 md:gap-4 text-gray-500 after:content-['/'] after:text-gray-300 last:after:content-none">
              <a href="#" className="hover:text-[#D10024] transition-colors">
                All Categories
              </a>
            </li>

            <li className="flex items-center gap-2 md:gap-4 text-gray-500 after:content-['/'] after:text-gray-300 last:after:content-none">
              <a href="#" className="hover:text-[#D10024] transition-colors">
                Accessories
              </a>
            </li>

            {/* Active Item */}
            <li className="text-[#D10024] font-bold">
              Headphones (227,490 Results)
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Store

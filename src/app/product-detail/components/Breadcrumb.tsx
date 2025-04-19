import React from 'react'

const Breadcrumb = () => {
  return (
      <div className="container mx-auto px-4 py-3 text-sm">
  <div className="flex items-center text-gray-500">
    <a href="#" className="hover:text-black">Home</a>
    <span className="mx-2">/</span>
    <a href="#" className="hover:text-black">Shop</a>
    <span className="mx-2">/</span>
    <a href="#" className="hover:text-black">Men</a>
    <span className="mx-2">/</span>
    <span className="text-gray-800">T-shirts</span>
  </div>
</div>

  )
}

export default Breadcrumb

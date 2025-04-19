import React from 'react'

const Tabs = () => {
  return (
      <div className="container mx-auto px-4 py-8">
  <div className="border-b border-gray-200">
    <div className="flex">
      <button className="px-6 py-3 text-gray-500 border-b-2 border-transparent">Product Details</button>
      <button className="px-6 py-3 text-gray-800 border-b-2 border-black font-medium">Rating &amp; Reviews</button>
      <button className="px-6 py-3 text-gray-500 border-b-2 border-transparent">FAQs</button>
    </div>
  </div>
</div>
  )
}

export default Tabs

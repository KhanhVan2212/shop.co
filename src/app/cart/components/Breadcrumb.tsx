import React from 'react'

const Breadcrumb = () => {
  return (
      <div className="container mx-auto px-6 py-4">
  <div className="flex items-center text-sm">
    <a href="#" className="text-gray-500 hover:text-black">Home</a>
    <span className="mx-2">&gt;</span>
    <span className="font-medium">Cart</span>
  </div>
</div>

  )
}

export default Breadcrumb

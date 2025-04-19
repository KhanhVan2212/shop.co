import Image from 'next/image'
import React from 'react'

const BrowsebyDressStyle = () => {
  return (
      <div className="p-4 sm:p-6 mx-auto bg-[#F0F0F0] rounded-2xl xl:w-[1400px] h-auto">
  <h1 className="clothes text-[28px] sm:text-[36px] font-bold text-center mb-8 sm:mb-10">BROWSE BY DRESS STYLE</h1>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
    <div className="bg-white rounded-2xl shadow-md overflow-hidden relative sm:col-span-1">
      <h2 className="text-[20px] sm:text-[28px] font-bold absolute top-3 left-3 z-10">Casual</h2>
      <Image src="/images/image 11.png" width={500} height={500} alt="Casual" className="w-full h-40 sm:h-48 object-cover" />
    </div>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden relative sm:col-span-2">
      <h2 className="text-[20px] sm:text-[28px] font-bold absolute top-3 left-3 z-10">Formal</h2>
      <Image src="/images/image 13.png" width={500} height={500} alt="Formal" className="w-full h-40 sm:h-48 object-cover"  />
    </div>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden relative sm:col-span-2">
      <h2 className="text-[20px] sm:text-[28px] font-bold absolute top-3 left-3 z-10">Party</h2>
      <Image src="/images/image 12.png" width={500} height={500} alt="Party" className="w-full h-40 sm:h-48 object-cover"  />
    </div>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden relative sm:col-span-1">
      <h2 className="text-[20px] sm:text-[28px] font-bold absolute top-3 left-3 z-10">Gym</h2>
      <Image src="/images/image 14.png" width={500} height={500} alt="Gym" className="w-full h-40 sm:h-48 object-cover" />
    </div>
  </div>
</div>

  )
}

export default BrowsebyDressStyle

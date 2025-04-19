import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
            <div className="bg-[#F2F0F1] w-full h-auto pt-10 sm:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-center px-4 sm:px-6">
          <div className="text-center sm:text-left">
            <h1 className="clothes font-bold text-[28px] sm:text-[36px] leading-[36px] sm:leading-[44px] lg:text-[48px] lg:leading-[56px] xl:text-[64px]  xl:pb-8">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="mt-4 text-[#00000099] text-[14px] sm:text-[16px] xl:pb-5 font-normal">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="mt-4 w-[150px] h-[40px] sm:w-[180px] sm:h-[48px] bg-black text-white rounded-2xl text-[14px] sm:text-[16px]">
              Shop Now
            </button>
            <div className="flex flex-col items-center sm:flex-row sm:items-start mt-6 sm:mt-8 gap-4 sm:gap-8">
              <div>
                <h1 className="text-[24px] sm:text-[32px] xl-text-[40px] font-bold">
                  200+
                </h1>
                <span className="text-[#00000099] text-[12px] sm:text-[14px]">
                  International Brands
                </span>
              </div>
              <div>
                <h1 className="text-[24px] sm:text-[32px] xl-text-[40px] font-bold">
                  2,000+
                </h1>
                <span className="text-[#00000099] text-[12px] sm:text-[14px]">
                  High-Quality Products
                </span>
              </div>
              <div>
                <h1 className="text-[24px] sm:text-[32px] xl-text-[40px] font-bold">
                  30,000+
                </h1>
                <span className="text-[#00000099] text-[12px] sm:text-[14px]">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
          <div className="relative mr mx-auto w-[90%] md:w-full">
           
          <Image src="/images/Rectangle 2.png" alt="Main Image" width={800} height={600} className="w-full" />
            {/* Vector 0trên đầu người nam */}
            <Image  src="/images/Vector (3).png" alt="Sparkle" width={64} height={64} className="absolute top-[20px] right-[20px] w-[64px] h-[64px] md:top-[40px] md:right-[40px] md:w-[104px] md:h-[104px]"/>
            {/* Vector bên trái gần người nữ */}
            <Image src="/images/Vector (3).png" alt="Sparkle" width={50} height={50} className="absolute bottom-[60px] left-[0px] w-[50px] h-[50px] md:bottom-[120px] md:left-[-30px] md:w-[80px] md:h-[80px]"  />
          </div>
        </div>
      </div>
  )
}

export default HeroSection

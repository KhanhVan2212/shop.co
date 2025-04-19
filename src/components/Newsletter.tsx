import React from 'react'

const Newsletter = () => {
  return (
      <div className="px-4 sm:px-6 mt-16 sm:mt-20 ">
  <div className="bg-black flex flex-col sm:flex-row w-full  h-auto lg:h-[180px] xl:w-[1380px]  lg:pl-10 items-center justify-center  gap-4 sm:gap-8 py-6 sm:py-0 rounded-2xl">
    <div className="w-full sm:w-[60%]">
      <h1 className="clothes text-white text-[24px] sm:text-[40px] font-bold text-center sm:text-left px-4 sm:px-8">
        STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
      </h1>
    </div>
    <div className="w-full sm:w-[40%] px-4 sm:px-8">
      <div className="flex bg-white h-[40px] sm:h-[44px] rounded-2xl gap-2">
        <div className="pl-4 pt-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <input type="text" className="text-[12px] sm:text-[14px] w-full" placeholder="Enter your email address" />
      </div>
      <button className="bg-white w-full h-[40px] sm:h-[44px] rounded-2xl mt-2 sm:mt-3 text-[12px] sm:text-[14px] font-normal">Subscribe
        to Newsletter</button>
    </div>
  </div>
</div>

  )
}

export default Newsletter

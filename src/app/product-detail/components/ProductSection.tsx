import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductSection = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row">
      {/* Product Images */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row">
  {/* Main product image - full width on mobile */}
  <div className="w-full md:w-[444px] bg-gray-100 rounded-2xl flex items-center justify-center">
    <Image
      src="/images/image 1.png"
      alt="One Life Graphic T-shirt"
      className="max-w-full"
      width={500}
      height={100}
    />
  </div>
  
  {/* Thumbnails row for mobile - hidden on desktop */}
  <div className="flex md:hidden space-x-2 mt-4 justify-center">
    <div className="border border-gray-300 rounded-2xl cursor-pointer w-[100px]">
      <Image
        src="/images/image 1.png"
        alt="T-shirt thumbnail"
        width={500}
        height={500}
        className="w-full"
      />
    </div>
    <div className="border border-gray-200 rounded-2xl cursor-pointer w-[100px]">
      <Image
        src="/images/image 1.png"
        alt="T-shirt thumbnail"
        width={500}
        height={500}
        className="w-full"
      />
    </div>
    <div className="border border-gray-200 rounded-2xl cursor-pointer w-[100px]">
      <Image
        src="/images/image 1.png"
        alt="T-shirt thumbnail"
        width={500}
        height={500}
        className="w-full"
      />
    </div>
  </div>
  
  {/* Vertical thumbnails column for desktop - hidden on mobile */}
  <div className="hidden md:block w-1/5 space-y-4 order-first md:mr-4">
    <div className="border border-gray-300 rounded cursor-pointer">
      <Image
        src="/images/image 1.png"
        alt="T-shirt thumbnail"
        width={500}
        height={500}
        className="w-full"
      />
    </div>
    <div className="border border-gray-200 rounded cursor-pointer">
      <Image
        src="/images/image 1.png"
        alt="T-shirt thumbnail"
        width={500}
        height={500}
        className="w-full"
      />
    </div>
    <div className="border border-gray-200 rounded cursor-pointer">
      <Image
        src="/images/image 1.png"
        alt="T-shirt thumbnail"
        width={500}
        height={500}
        className="w-full"
      />
    </div>
  </div>
</div>
      {/* Product Info */}
      <div className="md:w-1/2 md:pl-8 xl:pl-0 mt-6 md:mt-0">
        <h1 className="clothes text-4xl font-bold uppercase">
          ONE LIFE GRAPHIC T-SHIRT
        </h1>
        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            <svg
              width={19}
              height={17}
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                fill="#FFC633"
              />
            </svg>
            <svg
              width={19}
              height={17}
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                fill="#FFC633"
              />
            </svg>
            <svg
              width={19}
              height={17}
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                fill="#FFC633"
              />
            </svg>
            <svg
              width={19}
              height={17}
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                fill="#FFC633"
              />
            </svg>
            <svg
              width={19}
              height={17}
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                fill="#FFC633"
              />
            </svg>
          </div>
          <span className="ml-1 text-gray-600">4.5/5</span>
        </div>
        {/* Price */}
        <div className="mt-4 flex items-center">
          <span className="text-2xl font-bold">$260</span>
          <span className="text-2xl text-gray-400 line-through ml-2">$300</span>
          <span className="ml-2 bg-red-100 text-red-600 px-2 rounded-sm text-sm">
            -40%
          </span>
        </div>
        {/* Description */}
        <p className="mt-4 text-gray-600">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        {/* Color Selection */}
        <div className="mt-6">
          <p className="mb-2 text-gray-700">Select Colors</p>
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-olive-700 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <i className="fas fa-check text-white text-xs" />
            </button>
            <button className="w-8 h-8 bg-green-800 rounded-full" />
            <button className="w-8 h-8 bg-blue-900 rounded-full" />
          </div>
        </div>
        {/* Size Selection */}
        <div className="mt-6">
          <p className="mb-2 text-gray-700">Choose Size</p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
              Small
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
              Medium
            </button>
            <button className="px-4 py-2 bg-black text-white border border-black rounded-full text-sm">
              Large
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
              X-Large
            </button>
          </div>
        </div>
        {/* Quantity */}
        <div className="mt-6 flex items-center">
          <div className="flex bg-[#F0F0F0] rounded-2xl">
            <button className="w-8 h-8 flex items-center justify-center  rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </button>
            <div className="w-12 h-8 flex items-center justify-center ">1</div>
            <button className="w-8 h-8 flex items-center justify-center  rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          <Link href={"/cart"}>
            <button className="ml-4 bg-black xl:w-[400px] text-white rounded-3xl py-2 px-8 font-medium flex-grow cursor-pointer ">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

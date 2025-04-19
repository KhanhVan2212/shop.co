import Image from "next/image";
import React from "react";

const CartContent = () => {
  return (
    <main className="container mx-auto px-6 mb-16">
      <h1 className="text-4xl font-bold mb-8">YOUR CART</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3 border border-gray-300 rounded-lg">
  {/* Item 1 */}
  <div className="rounded-lg p-4 md:p-6 relative">
    {/* Desktop layout remains unchanged */}
    <div className="hidden md:flex md:flex-row gap-4">
      <button className="absolute top-6 right-6 text-red-500">
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
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md">
        <Image
          src="/images/image 1.png"
          alt="One Life Graphic T-shirt"
          className="max-w-full"
          width={500}
          height={100}
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-lg">Gradient Graphic T-shirt</h3>
        <p className="text-gray-600 text-sm mb-1">Size: Large</p>
        <p className="text-gray-600 text-sm">Color: White</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-xl">$145</span>
          <div className="flex items-center border rounded-full">
            <button className="px-3 py-1 text-xl">−</button>
            <span className="px-3">1</span>
            <button className="px-3 py-1 text-xl">+</button>
          </div>
        </div>
      </div>
    </div>
    
    {/* Mobile layout based on the screenshot */}
    <div className="flex md:hidden flex-col">
      <div className="flex items-start mb-2">
        <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-3">
          <Image
            src="/images/image 1.png"
            alt="Gradient Graphic T-shirt"
            className="w-full h-full object-cover"
            width={64}
            height={64}
          />
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-base">Gradient Graphic T-shirt</h3>
          <p className="text-gray-600 text-xs">Size: Large</p>
          <p className="text-gray-600 text-xs">Color: White</p>
        </div>
        <button className="text-red-500 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-lg">$145</span>
        <div className="flex items-center border border-gray-300 rounded-full">
          <button className="px-3 py-1 text-lg">−</button>
          <span className="px-2 text-sm">1</span>
          <button className="px-3 py-1 text-lg">+</button>
        </div>
      </div>
    </div>
  </div>
  
  <hr className="border-t border-gray-200 mx-4 md:mx-6 my-2 md:my-4" />
  
  {/* Item 2 */}
  <div className="rounded-lg p-4 md:p-6 relative">
    {/* Desktop layout */}
    <div className="hidden md:flex md:flex-row gap-4">
      <button className="absolute top-6 right-6 text-red-500">
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
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md">
        <Image
          src="/images/image 1.png"
          alt="Checkered Shirt"
          className="max-w-full"
          width={500}
          height={100}
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-lg">Checkered Shirt</h3>
        <p className="text-gray-600 text-sm mb-1">Size: Medium</p>
        <p className="text-gray-600 text-sm">Color: Red</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-xl">$180</span>
          <div className="flex items-center border rounded-full">
            <button className="px-3 py-1 text-xl">−</button>
            <span className="px-3">1</span>
            <button className="px-3 py-1 text-xl">+</button>
          </div>
        </div>
      </div>
    </div>
    
    {/* Mobile layout */}
    <div className="flex md:hidden flex-col">
      <div className="flex items-start mb-2">
        <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-3">
          <Image
            src="/images/image 1.png"
            alt="Checkered Shirt"
            className="w-full h-full object-cover"
            width={64}
            height={64}
          />
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-base">Checkered Shirt</h3>
          <p className="text-gray-600 text-xs">Size: Medium</p>
          <p className="text-gray-600 text-xs">Color: Red</p>
        </div>
        <button className="text-red-500 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-lg">$180</span>
        <div className="flex items-center border border-gray-300 rounded-full">
          <button className="px-3 py-1 text-lg">−</button>
          <span className="px-2 text-sm">1</span>
          <button className="px-3 py-1 text-lg">+</button>
        </div>
      </div>
    </div>
  </div>
  
  <hr className="border-t border-gray-200 mx-4 md:mx-6 my-2 md:my-4" />
  
  {/* Item 3 */}
  <div className="rounded-lg p-4 md:p-6 relative">
    {/* Desktop layout */}
    <div className="hidden md:flex md:flex-row gap-4">
      <button className="absolute top-6 right-6 text-red-500">
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
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md">
        <Image
          src="/images/image 1.png"
          alt="Skinny Fit Jeans"
          className="max-w-full"
          width={500}
          height={100}
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-lg">Skinny Fit Jeans</h3>
        <p className="text-gray-600 text-sm mb-1">Size: Large</p>
        <p className="text-gray-600 text-sm">Color: Blue</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-xl">$240</span>
          <div className="flex items-center border rounded-full">
            <button className="px-3 py-1 text-xl">−</button>
            <span className="px-3">1</span>
            <button className="px-3 py-1 text-xl">+</button>
          </div>
        </div>
      </div>
    </div>
    
    {/* Mobile layout */}
    <div className="flex md:hidden flex-col">
      <div className="flex items-start mb-2">
        <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-3">
          <Image
            src="/images/image 1.png"
            alt="Skinny Fit Jeans"
            className="w-full h-full object-cover"
            width={64}
            height={64}
          />
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-base">Skinny Fit Jeans</h3>
          <p className="text-gray-600 text-xs">Size: Large</p>
          <p className="text-gray-600 text-xs">Color: Blue</p>
        </div>
        <button className="text-red-500 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-lg">$240</span>
        <div className="flex items-center border border-gray-300 rounded-full">
          <button className="px-3 py-1 text-lg">−</button>
          <span className="px-2 text-sm">1</span>
          <button className="px-3 py-1 text-lg">+</button>
        </div>
      </div>
    </div>
  </div>
</div>
        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="border border-gray-300 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="flex justify-between mb-3">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold">$565</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-gray-600">Discount (-20%)</span>
              <span className="text-red-500 font-bold">-$113</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-bold">$15</span>
            </div>
            <div className="flex justify-between mb-6 text-lg font-bold">
              <span>Total</span>
              <span>$467</span>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Add promo code"
                className="bg-gray-100 rounded-lg px-4 py-3 w-full pr-20"
              />

              <button className="absolute right-2 top-2 bg-black text-white px-6 py-2 rounded-lg text-sm">
                Apply
              </button>
            </div>
            <button className="bg-black text-white w-full py-3 rounded-2xl font-medium flex items-center justify-center gap-2">
              Go to Checkout
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartContent;

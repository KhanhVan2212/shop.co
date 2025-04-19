import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-white py-8 px-4 sm:px-6">
  <div className="max-w-[1440px]  mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
    <div className="space-y-4 ">
      <h2 className="clothes text-[24px] sm:text-[28px] font-bold">SHOP.CO</h2>
      <p className="text-gray-600 text-[12px] sm:text-[14px]">
        We have clothes that suits your style and which you are proud to wear.<br />
        From women to men.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            {/* Twitter icon */}
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878a4.675 4.675 0 0 1-2.11-.583v.06c0 2.257 1.605 4.138 3.737 4.566a4.867 4.867 0 0 1-2.103.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995c-.375 0-.745-.022-1.112-.067a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.001z" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            {/* Facebook icon */}
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            {/* Instagram icon */}
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332.013 7.052.07 5.766.128 4.326.398 3.097 1.627 1.867 2.856 1.597 4.297 1.54 5.582.013 8.332 0 8.735 0 12s.013 3.668.07 4.948c.058 1.285.328 2.726 1.557 3.955 1.229 1.229 2.67 1.499 3.955 1.557 1.28.057 1.683.07 4.948.07s3.668-.013 4.948-.07c1.285-.058 2.726-.328 3.955-1.557 1.229-1.229 1.499-2.67 1.557-3.955.057-1.28.07-1.683.07-4.948s-.013-3.668-.07-4.948c-.058-1.285-.328-2.726-1.557-3.955C19.674.398 18.233.128 16.948.07 15.668.013 15.265 0 12 0z" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            {/* Pinterest icon */}
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.756-1.334-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.467-2.381 1.236-3.221-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.649.243 2.872.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.824.576C20.565 21.798 24 17.302 24 12 24 5.373 18.627 0 12 0z" />
          </svg>
        </a>
      </div>
    </div>
    <div>
      <h3 className="text-[16px]  sm:text-[18px] font-semibold mb-4">COMPANY</h3>
      <ul className="space-y-2 text-gray-600 text-[12px] sm:text-[14px]">
        <li><a href="#" className="hover:text-gray-900">About</a></li>
        <li><a href="#" className="hover:text-gray-900">Features</a></li>
        <li><a href="#" className="hover:text-gray-900">Works</a></li>
        <li><a href="#" className="hover:text-gray-900">Career</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-[16px] sm:text-[18px] font-semibold mb-4">HELP</h3>
      <ul className="space-y-2 text-gray-600 text-[12px] sm:text-[14px]">
        <li><a href="#" className="hover:text-gray-900">Customer Support</a></li>
        <li><a href="#" className="hover:text-gray-900">Delivery Details</a></li>
        <li><a href="#" className="hover:text-gray-900">Terms &amp; Conditions</a></li>
        <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-[16px] sm:text-[18px] font-semibold mb-4">FAQ</h3>
      <ul className="space-y-2 text-gray-600 text-[12px] sm:text-[14px]">
        <li><a href="#" className="hover:text-gray-900">Account</a></li>
        <li><a href="#" className="hover:text-gray-900">Manage Deliveries</a></li>
        <li><a href="#" className="hover:text-gray-900">Orders</a></li>
        <li><a href="#" className="hover:text-gray-900">Payments</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-[16px] sm:text-[18px] font-semibold mb-4">RESOURCES</h3>
      <ul className="space-y-2 text-gray-600 text-[12px] sm:text-[14px]">
        <li><a href="#" className="hover:text-gray-900">Free eBooks</a></li>
        <li><a href="#" className="hover:text-gray-900">Development Tutorial</a></li>
        <li><a href="#" className="hover:text-gray-900">How to - Blog</a></li>
        <li><a href="#" className="hover:text-gray-900">Youtube Playlist</a></li>
      </ul>
    </div>
  </div>
  <div className="max-w-7xl mx-auto mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-center">
    <div>
      <p className="text-gray-400 text-[10px] sm:text-[12px] text-center sm:text-left">Shop.co © 2000-2023, All Rights
        Reserved</p>
    </div>
    <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-0">
      <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
      <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-3" />
      <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
      <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-3" />
      <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
    </div>
  </div>
</footer>

  )
}

export default Footer

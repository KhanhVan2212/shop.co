import React from 'react'
import Breadcrumb from './components/Breadcrumb'
import ProductSection from './components/ProductSection'
import Tabs from './components/Tabs'
import Reviews from './components/Reviews'
import YouMightAlsoLike from './components/YouMightAlsoLike'
import Newsletter from '@/components/Newsletter'

const detail = () => {
  return (
    <div>
      <Breadcrumb />
      <ProductSection />
      <Tabs />
      <Reviews />
      <YouMightAlsoLike />
      <Newsletter />
    </div>
  )
}

export default detail

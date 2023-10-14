import React from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {/* <MainSlider></MainSlider>
      <CategorySlider></CategorySlider> */}
      <FeaturedProducts></FeaturedProducts>
    </div>
  )
}

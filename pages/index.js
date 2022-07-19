// Import React and Required Components
import React from 'react';
import {Product, FooterBanner, HeroBanner} from '../components';

// Import client from Sanity Lib
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner />
      {console.log(bannerData)}

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Tons of Speakers!</p>
      </div>

      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>

      Footer
    </>
  )
}

// Need to user gerServerSideProps with Next.js instead of a useEffect used in React
export const getServerSideProps = async () => {
  // Grab all (*) products from our Sanity Dashboard
  const query = '*[_type == "product"]';
  // Create products constant and await API query
  const products = await client.fetch(query);

  // Banner Information
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData } 
  }

}

export default Home
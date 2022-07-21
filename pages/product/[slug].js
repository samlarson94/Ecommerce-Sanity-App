import React from 'react';

import { client, urlFor } from '../../lib/client';

const ProductDetails = ({ product, products }) => {
    // Destructure values received from product and products
    const { image, name, details, price } = product;

    return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img src={urlFor(image && image[0])} />
                </div>
            </div>
        </div>
    </div>
  )
}

// Add getStaticPaths function to get information for all products but only return the current slug 
export const getStaticPaths = async () => {
    // Revise query to filter for slug
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;
    // New products constant
    const products = await client.fetch(query);
    // Add paths constant to hold product object
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));
    // Return paths and a fallback value
    return {
        paths, 
        fallback: 'blocking'
    }
}

//ReFactoring getServerSideProps to get static props and render user's requests
    //Use Next.js getStaticProps
export const getStaticProps = async ({ params: { slug } }) => {
    // Refactor query to look at all products and grab the first one that matches the selected slug.
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    // Add query to grab similar products
    const productsQuery = '*[_type == "product"]'

    // Create product constant to save result of query
    const product = await client.fetch(query);
    // Create products constant to save result of productsQuery
    const products = await client.fetch(productsQuery);

    console.log(product);
  
    //Return product and products as props and insert as parameters into ProductDetails.
    return {
      props: { products, product } 
    }
  
  }

export default ProductDetails
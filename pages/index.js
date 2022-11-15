import Head from 'next/head'
import { useQuery } from 'urql'
import ProductCard from '../components/Product-Card';
import { PRODUCT_QUERY } from '../lib/query'
import { Gallery } from '../styles/Gallery';

export default function Home() {
const [results]=useQuery({query: PRODUCT_QUERY})
const {data,fetching,error}=results;
if(fetching) return <p> Loading.....</p>
if(error) return <p> Error</p>
const products=results.data.products.data;

  return (
    <div>
      <Head>
        <title> My App</title>

      </Head>
      <main>
      
      <Gallery>
      {products &&products.map((product)=>(
        <ProductCard product={product}/>
      ))}
      </Gallery>
      </main>
    
    </div>
  )
}

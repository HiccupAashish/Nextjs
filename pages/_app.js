import '../styles/globals.css'
import {PRODUCT_QUERY} from "../lib/query";
import {createClient,Provider} from "urql"
import Nav from '../components/NavBar';
import StateContext from '../lib/context';
import { AnimatePresence } from 'framer-motion';


const client=createClient({url:process.env.NEXT_PUBLIC_BACKEND_API})

function MyApp({ Component, pageProps }) {
  
  return(
    <AnimatePresence>
    <StateContext>
  <Provider value={client}>
    <Nav/>
     <Component {...pageProps} />
  </Provider>
  </StateContext>
  </AnimatePresence>
)}

export default MyApp

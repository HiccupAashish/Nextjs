import "../styles/globals.css";
import { PRODUCT_QUERY } from "../lib/query";
import { createClient, Provider } from "urql";
import Nav from "../components/NavBar";
import StateContext from "../lib/context";
import { AnimatePresence } from "framer-motion";
import { UserProvider } from "@auth0/nextjs-auth0";
import {Toaster} from 'react-hot-toast'

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <StateContext>
        <UserProvider>
          <Toaster/>
          <Provider value={client}>
            <Nav />
            <Component {...pageProps} />
          </Provider>
        </UserProvider>
      </StateContext>
    </AnimatePresence>
  );
}

export default MyApp;

import Stripe from "stripe";
import {useRouter} from "next/router"
import { v4 as uuidv4 } from 'uuid';
import picture from "../public/checkout_image.svg"

import Image from "next/image"
import { Card, CustomerAddress, InfoWrapper, OrderInfo, Wrapper } from "../styles/SuccessStyle";
import { AnimatePresence } from "framer-motion";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

export default function success({ order }) {
  const customerDetails = order.customer_details;
 const router=useRouter()
  function capitalize(letter){
    
        const capitalize=letter.charAt(0).toUpperCase()+letter.slice(1)
    return capitalize;
  }
  return (
    <Wrapper>
      <AnimatePresence>
      <Card
      animate={{opacity:1,scale:1}}
      initial={{opacity:0,scale:0}}
      transition={{duration:0.75}}
      exit={{opacity:0,scale:0,transition:{duration:1}}}>
      <div>
  
      <h2>Thankyou for your Purchase 😊😊 </h2>
        <h2>A confirmation email has been sent to {customerDetails.email}</h2>
      </div>
      <InfoWrapper>
      <CustomerAddress>
        <h3>Address</h3>
        {Object.entries(customerDetails.address).map(([key, value]) => (
          <p key={key}>
            
            {capitalize(key)} :{capitalize(value)}
          </p>
        ))}
      </CustomerAddress>
      <OrderInfo>
        <h3>Products</h3>
      {order.line_items.data.map((item)=>(
      <div key={uuidv4()}>
        <p>Product: {item.description}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: {(item.price.unit_amount)/100}</p>
        </div>
      ))}

      </OrderInfo>
      </InfoWrapper>
      
      <Image height={300} src={picture} alt="ShoppingDone" />
      <button onClick={()=>router.push("/")}>Continue Shopping</button>
      </Card>
      </AnimatePresence>
    </Wrapper>
  );
}

import Stripe from "stripe";
import picture from "../public/checkout_image.png"
import { Gallery } from "../styles/Gallery";
import { DetailBox } from "../styles/ProductDetails";
import Image from "next/image"
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
  console.log(order.line_items)
  function capitalize(letter){
    
        const capitalize=letter.charAt(0).toUpperCase()+letter.slice(1)
    return capitalize;
  }
  return (
    <DetailBox>
      <div>
        <h1>Hey</h1>
        {/* <h2>{JSON.stringify(customerDetails.address)}</h2> */}
        <h2>A confirmation email has been sent to {customerDetails.email}</h2>
      </div>
      <div>
        <h3>Address</h3>
        {Object.entries(customerDetails.address).map(([key, value]) => (
          <p key={key}>
            {console.log(key.toUpperCase())}
            {capitalize(key)} :{capitalize(value)}
          </p>
        ))}
      </div>
      <div>
        <h3>Products</h3>
      {order.line_items.data.map((item)=>(
        <div>
        <p>Product: {item.description}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: {(item.price.unit_amount)/100}</p>
        </div>
      ))}

      </div>
      <button>Continue Shopping</button>
      <Image src={picture} alt="ShoppingDone" />
    </DetailBox>
  );
}

import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
export default async function handler(req, res) {
  if (req.method === "POST")
  console.log(req.body)
    try {
      
        const session = await stripe.checkout.sessions.create({
            submit_type:'pay',
            mode: "payment",
            // discounts:'{{}}',
            allow_promotion_codes:true,
            shipping_options:[{shipping_rate:"shr_1M4jYVFU8GHHPc80lAbq33Gh"}],
          payment_method_types: ["card"],
      
          shipping_address_collection: { allowed_countries: ["US", "CA","AU"] },
          line_items: req.body.map((item)=>{
            return {
                price_data: {
                  currency: "aud",
                  product_data: {
                    name: item.Title,
                    images: [
                      item.Images.data[0].attributes.formats.thumbnail.url,
                    ],
                  },
                  unit_amount: item.Price*100,
                },
                adjustable_quantity:{
                    enabled:true,
                } ,
                quantity:item.quantity
               };
          }),
            
           
          success_url:`${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url:`${req.headers.origin}/canceled`
        });
        res.status(200).json(session)
     
     
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message);
    }
}

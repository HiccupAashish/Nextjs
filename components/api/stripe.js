import Stripe from "stripe";
const stripe=new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)

async function handler(req,res){
 if(req.method==="POST"){
    try{
        const session=await stripe.checkout.sessions.create({
            submit_type:'pay',
            mode:'payment',
            payment_method_types:[`card`],
            shipping_address_collection:{
               allowed_countries: ['US','CA','AU']
            },
            line_items:req.body.map(item=>{
                return{
                    price_data:{
                        currency:'usd',
                        product_data:{
                            name:item.title,
                            images:[item.data.attributes.formats.thumbnail.url],

                        },
                        unit_amount:item.price
                    }
                }
            })
        })
        res.status(200).json(session)
    }catch(error){
        res.status(err.statusCode || 500).json(error.message)
    }
 }
}

export default handler;

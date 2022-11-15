import {loadStripe} from "@stripe/stripe-js"

let stripe;

async function getStripe(){
    if(!stripe){
        stripe= await loadStripe(`${process.env.NEXT_PUBLIC_PUBLISHABLE_KEY}`)
    }
    return stripe
}

export default getStripe;
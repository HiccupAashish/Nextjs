import { useContext } from "react";
import { useStateContext } from "../lib/context";
import { FaShoppingCart } from "react-icons/fa";
import { Card, Cards, CartBox, CartStyle, Checkout, EmptyStyle } from "../styles/CartStyles";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { Quantity } from "../styles/ProductDetails";
import getStripe from "../lib/stripe";


const card={
    show:{opacity: 1, scale:1, transition:{duration:0.3}},
    hidden:{opacity:0,scale:0.5}
}
const cards={
  show:{opacity:1,
    
  transition:{
    delayChildren: 0.4,
    staggerChildren: 0.2
  }},
  hidden:{
    opacity:1,
    
  }

}

export const Cart = () => {

 async function handleCheckout(){
    const stripe= await getStripe();
    const response=await fetch("/api/stripe",{
      method:"POST",
      headers:{'Content-Type':"application/json"},
      body:JSON.stringify(cartItems)
    })
    const data=await response.json();
   
  
    await stripe.redirectToCheckout({sessionId:data.id})
  }

  const { cartItems,totalPrice,setTotalPrice, totalQuantity ,qty,showCart,setShowCart,removeTotalQuantity,onAdd } = useStateContext();



  return (
    <CartBox exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.4}}} onClick={()=>setShowCart(!showCart)}>
      <CartStyle exit={{x:"50%", transition:{type:'tween'}}} initial={{x:"50%"}} animate={{x:"0%", transition:{type:'tween'}}} onClick={(e)=>e.stopPropagation()}>
        {cartItems.length < 1 &&
          <EmptyStyle layout initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1,transition:{duration:0.3}}}>
            <h1>You have more shopping to do</h1>
            <FaShoppingCart />
          </EmptyStyle>
}
          <Cards layout initial="hidden" animate="show" variants={cards}>
          {cartItems.length>=1 && cartItems.map((item) => {
            return (
                <>
              <Card layout  variants={card}  key={item.UID}>
                <img
                  src={item.Images.data[0].attributes.formats.small.url}
                  alt=""
                />
                <div>
                  <h3>{item.Title}</h3>
                  <h3>{item.Price}</h3>
                  <div>
                    <Quantity>
                      <span>Quantity</span>
                      <button>
                        <AiFillMinusCircle onClick={()=>removeTotalQuantity(item)} />
                      </button>

                      <p>{item.quantity}</p>
                      <button>
                        <AiFillPlusCircle onClick={()=>onAdd(1,item)}  />
                      </button>
                    </Quantity>
                  </div>
                </div>
              </Card>
           
              </>
            );
          })}
          </Cards>
          {cartItems.length>=1 &&
             <Checkout layout>
             <p>Subtotal: {totalPrice}</p>
             <button onClick={handleCheckout}>Purchase</button>
             </Checkout>
             }
         
        
      </CartStyle>
    </CartBox>
  );
};

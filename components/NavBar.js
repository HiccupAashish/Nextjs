import Link from "next/link";
import {FiShoppingBag, FiShoppingCart} from "react-icons/fi"
import { useStateContext } from "../lib/context";
import {AnimatePresence, motion} from "framer-motion"
import { NavItems, NavStyle } from "../styles/NavStyles";
import { Cart } from "./Cart";
export default function Nav(){
    const {showCart,setShowCart,totalQuantity}=useStateContext()
    return(
        <NavStyle>
            <Link href={"/"}>
            <h2>Navbar</h2>
            </Link>
            <NavItems>
               {totalQuantity !==0 && <motion.span initial={{opacity:0, scale:0.8}} animate={{opacity:1,scale:1}}>{totalQuantity}</motion.span>}
            <FiShoppingBag onClick={()=>setShowCart(true)}/>

            </NavItems>
            <AnimatePresence>   {showCart &&<Cart/>}</AnimatePresence> 
        </NavStyle>
    )
}
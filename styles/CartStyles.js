import styled from "styled-components";
import {motion} from "framer-motion"

export const CartBox=styled(motion.div)`

position: fixed;
width: 100%;
height: 100vh;
right: 0;
top:0;
display: flex;
background-color:rgba(0,0,0,0.4) ;
display: flex;
justify-content: flex-end;
z-index:2;
/* display: none; */
`

export const CartStyle=styled(motion.div)`
position: relative;
/* display: flex;
flex-direction: column; */
padding: 2rem 3rem;
width:40%;
background-color: #f1f1f1;
overflow-y:scroll;
`
export const Card=styled(motion.div)`
display:flex;
align-items: center;
justify-content: space-between;
margin:1rem;
border-radius: 1rem;
overflow: hidden;
background: white;
padding:2rem 1rem;
box-shadow: 0 8px 8px -4px lightblue;
img{
    border-radius: none;
    width:8rem;
}


`

export const EmptyStyle=styled(motion.div)`
position:absolute;
display: flex;
align-items: center;
justify-content: center;
/* left: 50%; */
transform: translate(-50%,0%);
height: 100%;
width: 100%;
svg{
    font-size: 2rem;
    color: var(--secondary);
}

`

export const Checkout=styled(motion.div)`
button{
    background:var(--primary);
    color:white;
    width: 100%;
    font-size: 0.8rem;
    padding: 0.5rem;
    margin-top:1rem;
    cursor: pointer;
    border:none;
}
`
export const Cards=styled(motion.div)`
`
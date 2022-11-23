import styled from "styled-components";
import {motion} from "framer-motion"
export const Wrapper=styled.div`
margin:5rem 15rem;
`
export const Card=styled(motion.div)`
background-color: white;
/* height: fit-content; */
border-radius: 2rem;
padding: 3rem;
display: flex;
flex-direction: column;
//justify-content: center;
 align-items: center;  
button{
    color: white;
    background-color: black;
    font-size: 1.2rem;
    font-weight:500;
    padding: 1rem 2rem;
    border:10px;

}
h2{
    text-align: center;
}

`
export const CustomerAddress=styled.div`
font-size:1.2rem;

`
export const OrderInfo=styled.div`
font-size: 1.2rem;
`

export const InfoWrapper=styled.div`
display:flex;
margin:2rem 0rem;
gap:3rem;
`
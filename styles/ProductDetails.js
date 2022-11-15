import styled from "styled-components";

export const DetailBox= styled.div`
display:flex;
flex-direction:row;
/* align-items: center; */
justify-content: center;
margin: 5rem 0em;
gap:2em;
`

export const ProductInfo=styled.div`
width:40%;
button{
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    border:none;

}
`

export const Quantity=styled.div`
display: flex;
align-items: center;
margin: 1rem 0rem;

button{
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;

}
p{
    padding: 0rem 1rem;
    width:1rem;
    text-align:center;
}
span{
    /* color:var(--secondary)
     */
    color: red;
}
svg{
    color:#494949;
}
`

export const Buy=styled.div`
width:100%;
display: flex;
justify-content: center;
align-items: center;

background: var(--primary);
color:white;
font-weight: 500; 
`
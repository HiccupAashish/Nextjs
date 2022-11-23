import styled from "styled-components";

export const NavStyle=styled.div`
min-height:5vh;
display: flex;
justify-content: center;
justify-content: space-between;
align-items: center;
position: relative;
padding: 1rem 1rem;

`

export const NavItems=styled.div`
display: flex;
    align-items: center;
    flex-direction: row;
    padding-top: 2vh;
    position: relative;
    justify-content: space-around;
    p{
        font-size: 1.5rem;
    }
    svg{
        font-size: 1.5rem;
        color:red;
    }
    div{
        display: flex;
        flex-direction:column;
        align-items: center;
        margin-right: 1em;
    }
    span{
        position: absolute;
        top:40%;
        z-index: 0;
        right: -6%;
        opacity: -1;

        width:1rem;
        height: 1rem;
        font-size: 0.3rem;
        background-color: red;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
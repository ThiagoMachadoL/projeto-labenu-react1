import styled from "styled-components"

export const StylePage = styled.div`
display: flex;
flex-direction: row;
flex-wrap:  wrap;
gap: 5px;
justify-content: center;
height: 105vh;
   `

export const ListStyle = styled.aside`
    background-color: rebeccapurple;
    display: flex;
    flex-direction: column;
    border: 5px solid black;
    padding: 5px;

    select{
        margin-bottom:5px;
    }
    input{
        display: flex;
    }
    button{
        margin-top: 15px;
    }

`;
export const StyleTotal = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 0.5em;
    justify-content: flex-end;

`
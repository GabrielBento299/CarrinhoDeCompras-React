import styled from "styled-components";

export const ProductArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
    width: 100%;

    .container-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 250px;
        height: 350px; 

        margin-bottom: 20px;

        border-radius: 7px;
        border: 1px solid #333;
        padding: 20px;
     }

     .container-card img {
       
     }
`;

export const Title = styled.h1`
    font-size: 20px;
    color: red;
`;

export const Span = styled.span`
     font-weight: bold;
     font-size: 18px;
`;

export const Button = styled.button`
    background: transparent;
    
    border: none;
    margin-top: 5px;
    font-size: 55px;
`;

export const Image = styled.img`
    width: 150px;
`;
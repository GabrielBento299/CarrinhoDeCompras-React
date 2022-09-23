import styled from "styled-components";

export const ProductArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 10rem;

    .container-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 250px;
        height: 350px; 

        margin-bottom: 20px;

        border-radius: 7px;
        background-color: #FFF;
        padding: 20px;
     }


   
`;

export const Title = styled.h1`
    font-size: 18px;
    color: #444;
    font-size: 700;
`;

export const Span = styled.span`
     font-weight: bold;
     font-size: 18px;
`;

export const BtnGroup = styled.div`
    border: none;
    border-radius: 7px;

    .teste {
       

    }
`;

export const Button = styled.button`
    background: transparent;
    
    border: none;
    margin-top: 5px;
    font-size: 20px;
    width: 100%;

    cursor: pointer;
`;

export const Image = styled.img`
    width: 150px;
`;
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 70px;
    margin-bottom: 70px;
    background-color: #333;

    a {
        text-decoration: none;
        font-size: 22px;
        color: #EEE;
        display: flex;
        gap: 7px;
        
    
    &:hover {
        color: #FFF;
    }
    }
`;

export const Icon = styled.h1`
    display: flex;

    padding-left: 7px;
    font-size: 24px;
`;
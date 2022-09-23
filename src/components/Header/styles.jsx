import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 70px;
    margin-bottom: 70px;
    background-color: crimson;

    a {
        text-decoration: none;
        font-size: 22px;
        color: #FFF;
        display: flex;
        gap: 7px;
        
    
    &:hover {
        color: #111;
    }
    }
`;

export const Icon = styled.h1`
    display: flex;

    padding-left: 7px;
    font-size: 24px;
`;
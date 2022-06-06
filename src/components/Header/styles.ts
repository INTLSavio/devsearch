import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    border-bottom: 1px solid black;
    align-items: center;
    justify-content: space-evenly;
    height: 80px;
    width: 100%;
    background-color: #c4392f;

    .perfil {
        width: 40px;
        height: 40px;
        background-color: white;
        border-radius: 50%;
    }

    a {
        text-decoration: none;
        font-size: 24px;
        color: white;
        font-weight: bold;
        cursor: pointer;
        border-bottom: 2px solid white;
    }

    h1 {
        color: white;
    }
`;
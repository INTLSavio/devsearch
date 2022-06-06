import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 30%;
    height: 80%;
    background-color: white;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        padding-bottom: 48px;
    }

    input {
        margin-bottom: 18px;
        width: 80%;
    }

    .coordinates {
        display: flex;
        gap: 22px;
    }
    
`;
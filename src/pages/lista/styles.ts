import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100vw - 32px;
    padding: 16px;
    margin: 16px;
    border: 1px solid black;
    border-radius: 18px;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: red;
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        } 

        td {
            padding: 1rem 2rem;
            border-bottom: 0.5px solid gray;
        }
    }
`;
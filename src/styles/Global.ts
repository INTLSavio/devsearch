import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --toastify-color-progress-light: green;
    --toastify-color-progress-dark: blue;
  }

  .react-modal-overlay {
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    padding: 3rem;
    position: relative;
    background: #f0f2f5;
    border-radius: 0.25rem;
    z-index: 2;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font: 16px Oswald, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
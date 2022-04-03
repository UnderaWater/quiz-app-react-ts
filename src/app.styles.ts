import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        background-size: cover;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        background-image: linear-gradient(
            45deg,
            hsl(338deg 56% 38%) 0%,
            hsl(358deg 36% 51%) 10%,
            hsl(14deg 42% 59%) 20%,
            hsl(26deg 44% 67%) 30%,
            hsl(37deg 42% 78%) 40%,
            hsl(54deg 45% 91%) 50%,
            hsl(114deg 24% 79%) 60%,
            hsl(165deg 31% 62%) 70%,
            hsl(187deg 49% 46%) 80%,
            hsl(196deg 100% 34%) 90%,
            hsl(221deg 47% 42%) 100%
          );
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > p {
        color: #242424;
    }

    .score {
        color: #242424;
        font-size: 2rem;
    }

    h1 {
        background-image: linear-gradient(180deg,#307ab9,#db3baa);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }

    .start,
    .next {
        cursor: pointer;
        background: linear-gradient(180deg,#ffffff,#476bbd);
        border: 2px solid #2872bb;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }
      
    .start {
        max-width: 200px;
    }
`
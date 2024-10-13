import styled from "styled-components";

export const PresentationBoxWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 40rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .box {
    width: 45%;
    min-width: 30rem;
    height: auto;
    min-height: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 1280px) {
      width: 100%;
    }

    .box-body {
      width: 100%;
      height: auto;
      min-height: 40rem;
      padding: 3rem;
      display: flex;
      justify-content: center;
      flex-direction: column;

      h1 {
        color: #ee9b00;
        font-family: "Raleway";
        font-size: 1.2rem;
      }

      h2 {
        margin: 2rem 0;
        width: 80%;
        color: black;
        font-weight: 500;
        font-family: "Raleway";
        font-size: 3rem;
      }

      p {
        color: black;
        font-weight: 500;
        font-family: "Raleway";
        font-size: 1rem;
      }
    }

    img {
      max-width: 90%;
      height: auto;
      object-fit: contain;
    }
  }
`;

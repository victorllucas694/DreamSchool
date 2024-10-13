import styled from "styled-components";

export const SectionServicesBoxWrapper = styled.div`
    width: 100%;
    height: auto;
    min-height: 65rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;

    .box-layer {
        width: 90%;
        margin: auto;
        flex-wrap: wrap;
        height: auto;
        min-height: 32rem;
        display: flex;
        justify-content: space-between;

        .box-image {
            width: 38%;
            height: auto;
            min-height: 32rem;
            min-width: 30rem;
            display: flex;
            justify-content: center;
            align-items: center;

            @media(max-width: 1280px) {
                width: 100%;
                
            }
            
            img {
                max-width: 80%;
                height: auto;
                object-fit: contain;
            }
        }

        .box-body {
            width: 52%;
            height: auto;
            min-height: 32rem;
            padding: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
           
            @media(max-width: 1280px) {
                width: 100%;
                
            }

            h1 {
                color: #ee9b00;
                font-size: 1.3rem;
                font-family: 'Raleway';
            }

            h2 {
                color: black;
                font-size: 2rem;
                font-weight: 500;
                width: 80%;
                font-family: 'Raleway';
            }

            p {
                color: black;
                font-size: 1rem;
                font-weight: 500;
                font-family: 'Raleway';
            }
        }
    }
`;
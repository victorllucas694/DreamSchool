import styled from "styled-components";

export const StudentAdvantageBox = styled.div`
    width: 90%;
    margin: auto;
    height: auto;
    padding: 2rem;
    min-height: 40rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    h1 {
        font-family: 'Raleway';
        font-size: 2rem;
        font-weight: 500;
    }

    .box-icons-advantage {
        width: 100%;
        height: auto;
        margin: 2rem auto;
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        flex-wrap: wrap;


        .box-advantage {
            width: 24%;
            min-width: 15rem;
            height: auto;
            min-height: 15rem;
            border: 1px solid rgb(200, 200, 200);
            border-radius: 10px;
            padding: 2rem;

            .circle-icon {
                width: 5rem;
                height: 5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5rem;
            }

            h1 {
                font-family: 'Raleway';
                font-weight: 500;
                font-size: 1.3rem;
            }

            p {
                font-family: 'Raleway';
                font-weight: 500;
                font-size: 1rem;  
                color: rgb(80, 80, 80);
                margin: 1rem 0;
            }
        }
    }
`;
import styled from "styled-components";

export const SectionMissionsBox = styled.div`
    width: 100%;
    height: auto;
    min-height: 65rem;
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 2rem;

    .box-mission {
        width: 90%;
        margin: auto;
        height: auto;
        min-height: 30rem;
        padding: 3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 2rem;

        .box-mission-body {
            width: 65%;
            min-width: 30rem;
            height: auto;
            min-height: 30rem;
            padding: 2rem;


            h1 {
                color: white;
                font-size: 1.2rem;
                font-weight: 500;
                font-family: 'Raleway';
            }
    
            h2 {
                color: white;
                font-size: 2.2rem;
                margin: 1rem 0;
                font-family: 'Raleway';
            }
        }

        .box-mission-image {
            width: 25rem;
            height: 25rem;
            border-radius: 25rem;
            margin: auto;
            background-color: white;

            img {
                max-width: 100%;
                height: auto;
                object-fit: contain;
                border-radius: 25rem;
            }
        }

    }

    .orange {
        background-color: #ee9b00;
        border-radius: 5px;

    }

    .blue {
        background-color: #16497b;
        border-radius: 5px;
    }
`;
import styled from "styled-components";

export const ClientReviewBox = styled.div`
    width: 90%;
    margin: auto;
    height: auto;
    padding: 3rem;
    min-height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    h1 {
        font-family: 'Raleway';
        font-size: 2rem;
        font-weight: 500;
    }

    .box-review {
        width: 100%;
        height: auto;
        min-height: 17rem;
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;

        .review {
            width: 30%;
            min-width: 18rem;
            height: auto;
            background-color: white;
            min-height: 15rem;
            padding: 2rem; 
            display: flex;
            justify-content: space-around;
            border-radius: 10px;
            flex-direction: column;
            align-items: center;

            h2 {
                font-family: 'Raleway';
                font-size: 1.2rem;
                color: rgb(80, 80, 80);
                font-weight: 500;
            }

            .review-container {
                width: 100%;
                height: 8rem;
                display: flex;
                justify-content: center;
                gap: 2rem;
                align-items: center;

                .circle-image {
                    width: 5rem;
                    border-radius: 5rem;
                    height: 5rem;

                    img {
                        max-width: 100%;
                        height: auto;
                        object-fit: contain;
                        border-radius: 5rem;
                    }
                }

                .body-container-flex {
                    width: 60%;
                    height: 6rem;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                }
            }

        }

    }
`;
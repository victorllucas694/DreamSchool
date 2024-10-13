import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    gap: 1rem;

    @media(max-width: 980px) {
        display: none;
    }
`;
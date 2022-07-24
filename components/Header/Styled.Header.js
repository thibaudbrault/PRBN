import styled from "styled-components";

export const Head = styled.header`
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const H1 = styled.h1`
    margin-bottom: 2rem;
    font-size: 5rem;
    letter-spacing: 0.5rem;
`;

export const H2 = styled.h2`
    font-size: 3.5rem;
    font-family: ${({ theme }) => theme.wendy};
`;
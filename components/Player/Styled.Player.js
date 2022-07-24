import styled from "styled-components";

export const Main = styled.main`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Time = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;

    & p {
        font-size: 1.7rem;

        &:first-child {
            margin-right: 1.5rem;
        }
        &:last-child {
            margin-left: 1.5rem;
        }
    }
`;

export const ProgressBar = styled.input`
    position: relative;
    width: 100%;
    height: 1rem;
    appearance: none;
    border-radius: 10px;
    background: ${({ theme }) => theme.light};
    border: 1px solid transparent;
    outline: none;

    &::-webkit-slider-runnable-track {
        position: relative;
        width: 100%;
        height: 1rem;
        border-radius: 10px;
        background: ${({ theme }) => theme.light};
        border: 1px solid transparent;
        outline: none;
    }

    &::-moz-range-track {
        position: relative;
        width: 100%;
        height: 1rem;
        border-radius: 10px;
        background: ${({ theme }) => theme.light};
        border: 1px solid transparent;
        outline: none;
    }

    &::-moz-focus-outer {
        border: 0;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 1rem;
        width: 100px;
        background: ${({ theme }) => theme.dark};
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        z-index: 2;
    }

    &::-moz-range-progress {
        height: 1rem;
        background: ${({ theme }) => theme.dark};
        border: 1px solid ${({ theme }) => theme.light};
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    &::-webkit-slider-thumb {
        position: relative;
        -webkit-appearance: none;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.light};
        background: ${({ theme }) => theme.dark};
        cursor: pointer;
        z-index: 3;
        box-sizing: border-box;
    }

    &::-moz-range-thumb {
        position: relative;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.light};
        background: ${({ theme }) => theme.dark};
        cursor: pointer;
        z-index: 3;
        box-sizing: border-box;
    }
`;

export const Audio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MoveButton = styled.button`
    margin: 0 1rem;
    background: none;
    border: none;
    font-size: 3rem;
    color: ${({ theme }) => theme.light};
`;

export const PlayButton = styled.button`
    display: flex;
    margin: 0 1rem;
    padding: 1rem;
    background: ${({ theme }) => theme.light};
    border: none;
    border-radius: 50px;
    font-size: 5rem;
`;
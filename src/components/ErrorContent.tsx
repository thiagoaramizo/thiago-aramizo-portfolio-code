import styled from "styled-components"

export const ErrorContent = styled.button`
    border: none;
    padding: 0 4px;
    background: none;
    font: inherit;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-decoration: red wavy underline;
    text-decoration-thickness: 1px;
    cursor: pointer;

    &:hover {
        background-color: rgba(255,255,255, 0.2);
        border-radius: 4px;
    }
`
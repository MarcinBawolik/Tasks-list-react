import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const FunctionalButton = styled.button`
    border: none;
    background-color: transparent;
    color: hsl(180, 100%, 25%);
    transition: 0.3s;
    display: flex;

    &:hover{
            color: hsl(180, 100%, 35%);
    };

    &:disabled{
            color: #ccc;
    };

    @media (max-width: 767px) {
            flex-basis: 100%;
            margin: 10px;
            justify-content: center;
            align-items: center;
        }
`;
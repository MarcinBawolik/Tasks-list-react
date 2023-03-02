import styled from "styled-components";

export default styled.button`
border: none;
background-color: transparent;
color: ${({ theme }) => theme.color.teal};
transition: 0.3s;
display: flex;

&:hover{
        filter: brightness(110%);
};

&:disabled{
        color: #ccc;
};

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
        justify-content: center;
        align-items: center;
    }
`;
import styled from "styled-components";

export default styled.nav`
background-color: ${({ theme }) => theme.color.teal};
color: ${({ theme }) => theme.color.transparent};
display: flex;
flex-wrap: nowrap;
justify-content: center;
`;
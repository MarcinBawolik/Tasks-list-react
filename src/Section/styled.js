import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background-color: ${({ theme }) => theme.color.white};
`;

export const SectionHeader = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid ${({ theme }) => theme.color.alto} 1px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) 
    {   
        grid-template-columns: 1fr;  
    }
`;  

export const SectionTitle = styled.h2`
    border-bottom: solid ${({ theme }) => theme.color.alto} 1px;
    font-size: 20px;
    padding: 20px;
    margin: 0;
    display: grid;
    grid-template-columns:1fr auto auto;
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
`;

export const SectionContainer = styled.div`
    padding: 20px;
`;

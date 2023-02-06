import styled, { css } from "styled-components";



export const List = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    border-bottom: solid rgb(230, 227, 227) 1px;
    padding: 10px;
    align-items: center;

    ${({hidden}) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    height: 30px;
    width: 30px;
    transition: 1s;
    ${({toggleDone}) => toggleDone && css`
        background-color: rgb(29, 179, 29);

        &:hover{
            background-color: rgb(40, 202, 40);
        }
    `}
    ${({ remove }) => remove && css`
        background-color: rgb(219, 38, 38);
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background-color: rgb(250, 56, 56);
        }
    `}
`;
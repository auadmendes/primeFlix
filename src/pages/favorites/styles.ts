import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5rem;
  width: 100%;

  h1 {
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.2rem;
  }

  ul {
    width: 720px;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
interface LinkProps {
  variant?: boolean;
}

export const LinkMovie = styled(Link)<LinkProps>`
    display: flex;
    padding: 0.5rem 1rem;
    
    border: 0;
    background: ${({ theme, variant }) => variant? theme.colors.delete : theme.colors.button};
    color: ${({ theme, variant }) => variant? theme.colors.text : theme.colors.secondary};
    transition: background-color 0.2s;
    cursor: pointer;
    text-decoration: none;
    text-decoration: none;
    margin-right: 1rem;

    &:hover {
      background: ${({ theme }) => theme.colors.button_hover};
    }
`;
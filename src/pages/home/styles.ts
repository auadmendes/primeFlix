import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const MovieList = styled.div`
  margin: 14px auto;
  max-width: 800px;
`;

export const Article = styled.article`
  width: 100%;
  background-color: white;
  padding: 14px;
  border-radius: 4px;

  span {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.9rem;

    strong {
      font-size: 1.5rem;
    }
  }
`;

export const MovieImage = styled.img`
  width: 900px;
  max-width: 100%;
  max-height: 460px;
  margin-top: 1.5rem;
  object-fit: cover;
  display: block;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const MovieLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  font-size: 1.5rem;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
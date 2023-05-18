import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 4rem;
  background-color: #000;
`;

export const Title = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;
export const Favorites = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background-color: white;
  padding: 5px 14px;
  color: black;
  border-radius: 4px;
`;
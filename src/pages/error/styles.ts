import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 4rem);
  gap: 1rem;

  h1 {
    font-size: 5rem;
  }

  h2 {
    color: #999;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
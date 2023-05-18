import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
  max-width: 1300px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
  margin: 0 auto;
  padding: 1rem 1rem;
  //background-color: pink;

  @media (max-width: 1080px) {
      flex-direction: column;
      gap: 1rem;
    }
`;

export const MovieImageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const MovieButton = styled.button`
  display: flex;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  border: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 720px) {
      width: 100%;
    }
`;
export const TrailerButton = styled.a`
  display: flex;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  border: 0;
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.2s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.button_hover};
  }

  @media (max-width: 720px) {
      width: 100%;
    }
`;

export const MovieImage = styled.img`
  //max-width: 50rem;
  object-fit: cover;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const MovieInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const SectionInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    display: flex;
    gap: 0.5rem;
    //flex-direction: column;
    
  }
`;

export const MovieGenres = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  width: 100%;

  @media (max-width: 520px) {
      flex-direction: column;
    }
`;

export const Overview = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  line-height: 1.5rem;
  gap: 0.5rem;
`;

export const MoviePage = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    padding: 1rem 2rem;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    text-decoration: none;
  }
`;
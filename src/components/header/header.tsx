import { Container, Favorites, Title } from "./styles";

export function Header() {
  return (
    <Container>
      <Title to={'/'}>Prime Flix</Title>
      <Favorites to={'/favorites'}>My movies</Favorites>
    </Container>
  )
}
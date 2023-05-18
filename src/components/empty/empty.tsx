import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Empty() {
  return (
    <Container>
      <span>
        Sua lista de filmes está vazia
      </span>
      <Link to={'/'}>Voltar</Link>
    </Container>
  )
}
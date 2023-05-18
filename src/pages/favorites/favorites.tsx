
import { useEffect, useState } from "react";
import { Container, LinkMovie } from "./styles";
import { toast } from "react-toastify";
import { Empty } from "../../components/empty/empty";

export interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export function Favorites() {
  const [movies, setMovies] = useState<MovieProps[]>([])

  function handleDelete(id: number) {
    const movieFilter = movies.filter((item) => {
      return (item.id !== id)
    })

    setMovies(movieFilter)
    localStorage.setItem('@movies', JSON.stringify(movieFilter))
    toast.success('Filme removido da sua lista')
  }

  useEffect(() => {
    const myList = localStorage.getItem('@movies')
    setMovies(myList ? JSON.parse(myList) : [])
  }, [])

  return (
    <Container>
      <h1>Meus filmes</h1>
      {movies.length === 0 && <Empty />}
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <span>{movie.title}</span>
              <div>
                <LinkMovie
                  to={`/movie/${movie.id}`}
                >
                  Detalhes
                </LinkMovie>

                <LinkMovie
                  to="#"
                  variant
                  onClick={() => handleDelete(movie.id)}
                >
                  Deletar
                </LinkMovie>
              </div>

            </li>
          )
        })}
      </ul>
    </Container>
  )
}
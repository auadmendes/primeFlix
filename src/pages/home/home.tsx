import { useEffect, useState } from "react"
import api from "../../services/api";

import {
  Container,
  MovieList,
  Article,
  MovieImage,
  MovieLink,
  Loading
} from "./styles";


//movie/now_playing?api_key=3c8b27ece8b6d0e93b646bb0ba6bfb75&language=pt-BR

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

export function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function loadMovies() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '3c8b27ece8b6d0e93b646bb0ba6bfb75',
          language: 'pt-BR',
          page: 1,
        }
      })
      setMovies(response.data.results.slice(0, 15))
      setLoading(false)
    }

    loadMovies()

  }, [])

  if (loading) {
    return (
      <Loading>
        <h2>Loading...</h2>
      </Loading>
    )
  }

  return (
    <Container>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Article key={movie.id}>
              <span>
                <strong>{movie.title}</strong>
                {movie.original_title}
              </span>
              <MovieImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
              <MovieLink to={`/movie/${movie.id}`}>Acessar</MovieLink>
            </Article>
          )
        })}
      </MovieList>
    </Container>
  )
}
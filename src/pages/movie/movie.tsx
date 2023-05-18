import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Container,
  MovieGenres,
  MovieImage,
  MovieInfo,
  SectionInfo,
  Title,
  Overview,
  MoviePage,
  MovieImageContainer,
  ButtonContainer,
  MovieButton,
  TrailerButton,
} from "./styles";

import api from "../../services/api";


const apiKey = import.meta.env.VITE_API_KEY

interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  homepage?: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  budget: number;
  //genre_ids: number[];
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

export function Movie() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState<MovieProps>()
  const [loading, setLoading] = useState(true)

  function handleSaveMovie() {
    const myMovieList = localStorage.getItem("@movies")
    const savedMovies = myMovieList ? JSON.parse(myMovieList) : [];

    const hasMovie = savedMovies.some((savedMovie: { id: number | undefined; }) => savedMovie.id === movie?.id)

    if (hasMovie) {
      toast.warning(`Este filme já está na sua lista`)
      return
    }

    savedMovies.push(movie)
    localStorage.setItem("@movies", JSON.stringify(savedMovies))
    //console.log(movie, '>>>>>>>')
    toast.success('Filme salvo na sua lista')
  }

  useEffect(() => {
    async function getMovie() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: apiKey,
          language: 'pt-BR'
        }
      })
        .then((response) => {
          setMovie(response.data)
          setLoading(false)
        })
        .catch(() => {
          navigate('/', { replace: true })
          return
        })
    }
    getMovie()

  }, [id, navigate])

  if (loading) {
    return (
      <div>
        loading
      </div>
    )
  }

  return (
    <Container>
      <MovieImageContainer>
        <MovieImage
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <ButtonContainer>
          <MovieButton onClick={handleSaveMovie}>Salvar</MovieButton>
          <TrailerButton
            href={`https://youtube.com/results?search_query=${movie?.title} trailer`}
            target="_blank"
          >
            Trailer
          </TrailerButton>
        </ButtonContainer>
      </MovieImageContainer>
      <MovieInfo>
        <Title>
          <h1>{movie?.title}</h1>
          <span>
            {movie?.original_title}
            <h5>{movie?.release_date}</h5>
          </span>
        </Title>
        <hr />

        <SectionInfo>
          <span>Orçamento: <strong>{movie ? movie.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : ''}</strong>
          </span>
          <span>Avaliação:  <strong>{movie?.vote_average.toFixed(2)} / 10</strong></span>
        </SectionInfo>
        <MovieGenres>
          {movie?.genres.map((item) => (
            <span key={item.id}>
              {item.name}
            </span>
          ))}
        </MovieGenres>
        <Overview>
          <span>Overview</span>
          <span>{movie?.overview}</span>
        </Overview>
        <MoviePage>

          {movie?.homepage ?
            <Link to={movie.homepage} target="blank">{movie.title}</Link> :
            'Este filme não tem site'
          }
        </MoviePage>
      </MovieInfo>
    </Container>
  )
}
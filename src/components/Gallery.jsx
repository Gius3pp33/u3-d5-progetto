import React, { Component } from "react";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import Loading from "./Loading";
import Error from "./Error";
import "./Gallery.css";

class Gallery extends Component {
  state = {
    movies: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    console.log("Component didmount");
    this.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
        console.log("query cambiata");
      this.fetchMovies();
    }
  }

  fetchMovies = async () => {
    const { query } = this.props;
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=fa8bdbb6&s=${query}`
      );
      if (!response.ok) {
        throw new Error("Errore nella ricerca");
      }
      const data = await response.json();
      this.setState({
        movies: data.Search,
        loading: false,
        error: null,
      });
    } catch (error) {
        console.log("Errore:", error);
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  };

  // funzione per dividere l'array di film in gruppi di quattro
  splitIntoGroupsOfFour = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 4) {
      result.push(arr.slice(i, i + 4));
    }
    return result;
  };
  

  render() {
    const { title } = this.props;
    const { movies, loading, error } = this.state;

    // Gestione dello stato di caricamento e degli errori
    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    // divido l'array movies in gruppi di quattro
    const movieGroups = this.splitIntoGroupsOfFour(movies);

    return (
      <section
        className={`mb-5 px-0 ${title === "Trending Now" ? "mt-5" : ""}`}
      >
        <h2 className="mb-3 mt-5 ms-3 text-white">{title}</h2>
        <Carousel interval={null} indicators={false} controls={true}>
          {movieGroups.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="no-gap">
                {group.map((movie, idx) => (
                  <Col key={idx} xl={3} md={6} sm={12} className="mb-3">
                    <Card bg="dark" text="white" className="movie-card">
                      <Card.Img
                        variant="top"
                        src={movie.Poster}
                        alt={movie.Title}
                        className="card-image"
                      />
                      <Card.Body className="card-body">
                        <Card.Title className="card-title">
                          {movie.Title}
                        </Card.Title>
                        <Card.Text className="card-text">
                          {movie.Year}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    );
  }
}

export default Gallery;

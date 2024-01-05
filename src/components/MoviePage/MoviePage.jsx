import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "./MoviePage.css";
import Form from "react-bootstrap/Form";
import { MOVIES } from "../../Data";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";

function MoviePage() {
  const [filmAdi, setFilmAdi] = useState("");
  const [movie, setMovie] = useState(MOVIES);

  function handleFilmAdiChange(e) {
    const filmAdi = e.target.value;
    setFilmAdi(filmAdi);

    const filtrelenmisFilmler = MOVIES.filter((film) =>
      film.Title.toLowerCase().includes(filmAdi.toLowerCase())
    );

    setMovie(filtrelenmisFilmler);
  }

  return (
    <div className="container">
      <Form>
        <Form.Group
          className="mb-3 text-center"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="formlabel" style={{ color: 'red' }}>
            <strong>Movie Name </strong>{" "}
          </Form.Label>
          <Form.Control
            value={filmAdi}
            onChange={handleFilmAdiChange}
            type="text"
            placeholder="Film Adı Giriniz"
          />
        </Form.Group>
      </Form>

      <div className="d-flex justify-content-center flex-wrap ">
        {movie.map((item, index) => (
          <Card className="card" key={index} style={{ width: "18%", margin: "10px" }}>
            <Card.Img variant="top" src={item.Poster} />

            <Card.Body>
              <hr />
              <Card.Title>{item.Title}</Card.Title>
              <hr />
              <Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item> IMDb Puanı: {item.imdbRating}</ListGroup.Item>
                  <ListGroup.Item><strong>Yazar:</strong> {item.Writer}</ListGroup.Item>
                  <ListGroup.Item><strong>Türü:</strong> {item.Genre}</ListGroup.Item>
                  <ListGroup.Item><strong>Aktörleri:</strong> {item.Actors}</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MoviePage;

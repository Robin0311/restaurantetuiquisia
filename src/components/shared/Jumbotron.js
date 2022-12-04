import Card from "react-bootstrap/Card";

const Jumbotron = () => {
  return (
    <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Reseña</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              La excelencia en comida
            </Card.Subtitle>
            <Card.Text>
              Restaurante con una excelente atencion al publico ademas de que
              sus platillos son deliciosos, esa es la razon por la que tiene una
              condecoracion de 3 estrellas michellin.
            </Card.Text>
            <Card.Footer className="mb-2 text-muted">Julie Andrieu</Card.Footer>
            <Card.Link href="https://es.wikipedia.org/wiki/Julie_Andrieu">
              Otras reseñas
            </Card.Link>
          </Card.Body>      
    </Card>
  );
};

export default Jumbotron;

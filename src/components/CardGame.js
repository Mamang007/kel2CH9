import { Container, Card, CardGroup } from 'react-bootstrap';
import '../style/landingPage.css';

function CardGame() {
        return (
        <div className='game-page'>
          <Container>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="./images/rockpaperstrategy-1600.jpg" />
                <Card.Body>
                  <Card.Title>Suit Game</Card.Title>
                  <Card.Text>
                    Permainan tradisional untuk menentukan pemenang dengan cara menebak lawan dan menggunakan jurus terbaik.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <button>Lanjut</button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/rockpaperstrategy-1600.jpg" />
                <Card.Body>
                  <Card.Title>Suit Game</Card.Title>
                  <Card.Text>
                  Permainan tradisional untuk menentukan pemenang dengan cara menebak lawan dan menggunakan jurus terbaik.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button>Lanjut</button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="./images/rockpaperstrategy-1600.jpg" />
                <Card.Body>
                  <Card.Title>Suit Game</Card.Title>
                  <Card.Text>
                  Permainan tradisional untuk menentukan pemenang dengan cara menebak lawan dan menggunakan jurus terbaik.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button>Lanjut</button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Container>
      </div>
          );
  }
  
  export default CardGame;
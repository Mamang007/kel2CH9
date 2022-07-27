import { Container, Button } from "react-bootstrap";
import '../style/landingPage.css';

function Description() {
    return (
    <div className='description-page'>
        <Container>
        <div>
            <div className="column left">
                <h1>Game Suit</h1>
                <img src="./images/rockpaperstrategy-1600.jpg" alt='preview' className="align-items-center" />
            </div>
            <div className="column right">
                <div className='row'>
                <h4>Disaat banyak orang saling baku hantam untuk menentukan pemenang, Binarian menemukan cara damai untuk menjadi pemenang. Game Suit merupakan permainan Arcade dimana pemain memilih simbol batu, kertas, atau gunting untuk melawan musuh dalam satu ronde.</h4>
                <p>Recent Reviews: Very Positive</p>
                <p>All Reviews: Mostly Positive</p>
                <p>Release Date: 26 July 2022</p>
                <p>Developer: Binarian</p>
                <p>Publisher: Binarian</p>
                <Button variant="outline-primary">Play Now</Button>
                </div>
            </div>
        </div>
        </Container>
      </div>
    )
}

export default Description;
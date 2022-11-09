import React from "react";
import HornedBeast from "./HornedBeast";
import data from '../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Main.css';

class Main extends React.Component {
  render () {
    let beastArr = [];
    data.forEach((hBeast, idx) => {
      beastArr.push(
        <HornedBeast 
        title={hBeast.title} 
        imageUrl={hBeast.image_url} 
        description={hBeast.description}
        key={idx}
        />
      )
    });
    return (
      <main>
        <Container>
          <Row>
            {beastArr}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;
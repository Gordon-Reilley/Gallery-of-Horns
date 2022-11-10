import React from "react";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Main.css';

class Main extends React.Component {
  render () {
    
    let beastArr = this.props.beastData.map((beast, idx) =>
      (
        <HornedBeast
        openModal={() => this.props.openModal(beast)}
        id={beast._id} 
        title={beast.title} 
        imageUrl={beast.image_url} 
        description={beast.description}
        horns={beast.horns}
        keyword={beast.keyword}
        key={idx}
        />
      )
    )
    return (
      <main>
        <Container>
          <Row>
            {beastArr}
          </Row>
        </Container>
      </main>
    )
  }
};

export default Main;
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    };
  }

  handleFav = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
    this.props.openModal()
  }

  render () {
    return (
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img 
        src={this.props.imageUrl} 
        alt={this.props.title} 
        title={this.props.title} 
        onClick={(this.props.openModal)}
      />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Card.Text>🖤{this.state.favorites} favorites</Card.Text>
        <Button onClick={this.handleFav} className='button'>Pick Me!</Button>
      </Card.Body>
      </Card>
      </Col>
    );
  }
}

export default HornedBeast;
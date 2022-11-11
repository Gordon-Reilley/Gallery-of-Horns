import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Form from 'react-bootstrap/Form';
import SelectedBeast from './SelectedBeast';
import data from '../data.json';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      modalPopUp: false,
      selectedBeast: null,
      hornNumber: 'all',
    };
  };

  closeModal = () => {
    this.setState({
      modalPopUp: false
    });
  };

  openModal= (beast) => {
    this.setState({
      modalPopUp: true,
      selectedBeast: beast
    });
  };

  filterHorns = (e) => {
    e.preventDefault();
    let hornNumber = e.target.value;
    let newData;
    hornNumber === 'all' ? newData = data : newData = data.filter(obj => obj.horns === parseInt(hornNumber));
    this.setState({
      beastData: newData
    });
  }

  render() {
    return (
    <>
      <Header/>
      <Form>
        <Form.Label>How Many Horns?</Form.Label>
        <Form.Select onChange={this.filterHorns}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>100</option>
          <option>all</option>
        </Form.Select>
      </Form>
      <Main
        beastData={this.state.beastData}
        openModal={(this.openModal)}
      />
      { this.state.selectedBeast &&
        <SelectedBeast
          show={this.state.modalPopUp}
          onHide={this.closeModal}
          selectedBeast={this.state.selectedBeast}
        />
      }
      <Footer/>
    </>
    );
  }
};

export default App;

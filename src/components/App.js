import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
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

  render() {
    return (
    <>
      <Header/>
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

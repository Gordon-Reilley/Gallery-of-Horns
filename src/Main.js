import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render () {
    return (
      <main>
      <HornedBeast title='Rhino' imageUrl='' description='Rhinos are basically just big wrecking balls!'/>
      <HornedBeast title='Narwhal' imageUrl='' description='Narwhals are basically just unicorns of the sea!'/>
    </main>
    );
  }

}

export default Main;
import React from "react";

class HornedBeast extends React.Component {
  render () {
    console.log(this.props.title);
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img src='' alt='' title=''></img>
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export default HornedBeast;
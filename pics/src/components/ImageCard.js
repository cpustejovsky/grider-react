import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
      this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans(e) {
    e.target.style.height="20px"
  }

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

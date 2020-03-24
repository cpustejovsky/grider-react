import React, { Component } from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import StreamList from "./StreamList";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      <>
        <button
          onClick={() => {
            this.props.deleteStream(this.props.stream.id);
          }}
          className="ui negative button"
        >
          Delete
        </button>
        <button onClick={() => history.push("/")} className="ui button">
          Cancel
        </button>
      </>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    } else {
      return `Delete Stream with title "${this.props.stream.title}"?`;
    }
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <StreamList />
          <Modal
            title={this.renderContent()}
            content="Are you sure you want to delete the stream?"
            actions={this.renderActions()}
            onDismiss={() => history.push("/")}
          />
        </>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);

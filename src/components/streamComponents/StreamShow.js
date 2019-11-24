import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  getId() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return id;
  }
  componentDidMount() {
    this.props.fetchStream(this.getId());
    this.buildPlayer();
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  componentWillUnmount() {
    this.player.destroy();
  }
  buildPlayer() {
    if (this.player || !this.props.stream) return;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.getId()}.flv`
    });
    console.log(this.player);
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  render() {
    if (!this.props.stream) return <div>Loading...</div>;
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls></video>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (
  { streams },
  {
    match: {
      params: { id }
    }
  }
) => {
  return { stream: streams[id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);

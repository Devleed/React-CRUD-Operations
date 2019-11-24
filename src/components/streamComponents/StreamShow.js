import React from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
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
  }
  render() {
    if (!this.props.stream) return <div>Loading...</div>;
    const { title, description } = this.props.stream;
    return (
      <div>
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

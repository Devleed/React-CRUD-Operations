import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.fetchStream(id);
  }
  onSubmit = formValues => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.editStream(id, formValues);
  };
  render() {

    if (!this.props.stream) return <div>Loading...</div>;
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
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

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
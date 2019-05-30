import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    commentOnSubmit: PropTypes.func.isRequired
  }

  state = {
    commentBody: ''
  }

  onSubmit = event => {
    event.preventDefault();
    const { commentOnSubmit } = this.props;
    const { commentBody } = this.state;
    commentOnSubmit(commentBody);
    this.setState({
      commentBody: ''
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    const { commentBody } = this.state;
    const { onSubmit, handleChange } = this;
    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="commentBody">New Comment</label>
        <textarea name="commentBody" value={commentBody} onChange={handleChange} />
        <button>Post Comment</button>
      </form>
    );
  }
}

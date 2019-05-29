import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends PureComponent {
  static propTypes = {
    postOnSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  onSubmit = event => {
    event.preventDefault();
    const { postOnSubmit } = this.props;
    const { title, body } = this.state;
    postOnSubmit(title, body);
    this.setState({
      title: '',
      body: ''
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    const { title, body } = this.state;
    const { onSubmit, handleChange } = this;
    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleChange} />
        <label htmlFor="body">Body</label>
        <textarea name="body" value={body} onChange={handleChange} />
        <button>Create Post</button>
      </form>
    );
  }
}

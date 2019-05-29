import { connect } from 'react-redux';
import PostForm from '../components/posts/PostForm';
import { addPost } from '../actions/postActions';

const mapDispatchToProps = dispatch => ({
  postOnSubmit(title, body) {
    dispatch(addPost(title, body));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);

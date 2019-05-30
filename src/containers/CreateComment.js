import { connect } from 'react-redux';
import CommentForm from '../components/comments/CommentForm';
import { addComment } from '../actions/commentActions';

const mapDispatchToProps = (dispatch, props) => ({
  commentOnSubmit(commentBody) {
    dispatch(addComment(props.match.params.id, commentBody));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);

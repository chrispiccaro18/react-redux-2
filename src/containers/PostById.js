import { connect } from 'react-redux';
import { getPost } from '../selectors/postSelectors';
import { getComments } from '../selectors/commentSelectors';
import PostDetail from '../components/posts/PostDetail';

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.match.params.id),
  comments: getComments(state, props.match.params.id)
});

export default connect(
  mapStateToProps
)(PostDetail);

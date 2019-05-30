import { connect } from 'react-redux';
import Comments from '../components/comments/Comments';
import { getComments } from '../selectors/commentSelectors';

const mapStateToProps = state => ({
  comments: getComments(state)
});

export default connect(
  mapStateToProps
)(Comments);

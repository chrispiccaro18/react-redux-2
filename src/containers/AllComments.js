import { connect } from 'react-redux';
import Comments from '../components/comments/Comments';
import { getComments } from '../selectors/commentSelectors';

const mapStateToProps = (state, props) => ({
  comments: getComments(state, props.id)
});

export default connect(
  mapStateToProps
)(Comments);

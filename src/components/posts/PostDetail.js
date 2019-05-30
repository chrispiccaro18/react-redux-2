import React from 'react';
import PropTypes from 'prop-types';
import Comments from '../comments/Comments';
import CreateComment from '../../containers/CreateComment';

function PostDetail({ post, comments }) {
  const { title, body, id } = post;
  return (
    <>
    <section>
      <h2>{title}</h2>
      <pre>{body}</pre>
    </section>
    <section>
      <h3>Comments</h3>
      <Comments comments={comments} />
    </section>
    <section>
      <CreateComment id={id} />
    </section>
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired,
  comments: PropTypes.array.isRequired
};

export default PostDetail;

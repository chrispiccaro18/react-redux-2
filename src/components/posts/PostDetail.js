import React from 'react';
import PropTypes from 'prop-types';
import CreateComment from '../../containers/comments/CreateComment';
import AllComments from '../../containers/comments/AllComments';

function PostDetail({ post }) {
  const { title, body, id } = post;
  return (
    <>
    <section>
      <h2>{title}</h2>
      <pre>{body}</pre>
    </section>
    <section>
      <h3>Comments</h3>
      <AllComments id={id} />
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
};

export default PostDetail;

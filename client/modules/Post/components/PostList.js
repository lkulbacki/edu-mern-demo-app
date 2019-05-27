import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            key={post.cuid}
            onDelete={() => props.handleDeletePost(post.cuid)}
            upvotePost={() => props.handleUpvotePost(post.cuid)}
            downvotePost={() => props.handleDownvotePost(post.cuid)}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    voteCount: PropTypes.number,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  handleUpvotePost: PropTypes.func.isRequired,
  handleDownvotePost: PropTypes.func.isRequired,
};

export default PostList;

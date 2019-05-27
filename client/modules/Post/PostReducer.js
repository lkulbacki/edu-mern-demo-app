import { ADD_POST, EDIT_POST, ADD_POSTS, DELETE_POST, UPVOTE_POST, DOWNVOTE_POST } from './PostActions';

// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };

    case EDIT_POST :
      return {
        data: state.data.map(post => { return post.cuid === action.cuid ? Object.assign({}, post, action.post) : post } ),
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    case UPVOTE_POST :
      console.log('   REDUCER');
      return {
        data: state.data.map(post => {
          if (post.cuid === action.cuid) {
            post.voteCount += 1;
            return Object.assign({}, post, action.post);
          } else {
            return post;
          }
        }),
      };

    case DOWNVOTE_POST :
      console.log('   REDUCER');
      return {
        data: state.data.map(post => {
          if (post.cuid === action.cuid) {
            post.voteCount -= 1;
            return Object.assign({}, post, action.post);
          } else {
            return post;
          }
        }),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostReducer;

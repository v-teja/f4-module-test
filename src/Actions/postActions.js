export const fetchPostsRequest = () => ({
    type: 'FETCH_POSTS_REQUEST',
  });
  
  export const fetchPostsSuccess = (posts) => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts,
  });
  
  export const fetchPostsFailure = () => ({
    type: 'FETCH_POSTS_FAILURE',
  });
  
  export const fetchPosts = () => {
    return (dispatch) => {
      dispatch(fetchPostsRequest());
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
          .then((data) => {
              console.log(data);
          dispatch(fetchPostsSuccess(data));
        })
        .catch((error) => {
          console.error(error);
          dispatch(fetchPostsFailure());
        });
    };
  };
  
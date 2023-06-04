import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../Actions/postActions';
import Loading from './Loading';
import '../App.css';

const ItemDetail = ({ id }) => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.posts);
  console.log(id);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  const item = items.find((item) => item.id === parseInt(id));


  if (loading) {
    return <Loading />;
  }

  if (!item) {
    return <div>Item not found.</div>;
  }

  const { title, body, userId } = item; // Destructure properties

  return (
    <div className='details-container'  >
      <h1>Details Page For Post With ID: {item.id}</h1>
      <img src={`https://picsum.photos/200?random=${item.id}`} alt='random' className='image'></img>
      <p>User ID: {userId}</p>
      <h2>Title: {title}</h2>
      <p>Body: {body}</p>

    </div>
  );
};

export default ItemDetail;

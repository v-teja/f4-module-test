import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../Actions/postActions'
import ItemList from './ItemList';
import Loading from './Loading';

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {loading ? <Loading /> : <ItemList items={items} />}
    </div>
  );
};

export default Home;

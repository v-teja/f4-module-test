import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';



const ItemList = ({ items }) => {

  const navigate = useNavigate();


  return (

    <div className='container item-gallery'>
      {items.map((item) => (
        <div key={item.id} className='item-container' onClick={() => navigate(`/item/${item.id}`)}>
          <img src={`https://picsum.photos/200?random=${item.id}`} alt='random'></img>
          <span>User ID: {item.userId}</span>
          {/* <span>Post ID: {item.id}</span> */}
            <p className='item-title'>Title: {item.title.slice(0,12)}...</p>
          <p>Body: {item.body.slice(0, 50)}...</p>
          <Link to={`/item/${item.id}`} className='link'>Read More...</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

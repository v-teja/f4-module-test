import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ItemDetail from './Components/ItemDetail';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="" element={<ItemList/>} */}
          <Route  path="/" element={<Home/>} />
          {/* <Route path="/item/:id" element={<ItemDetail/>} /> */}
          <Route path="/item/:id" element={<ItemDetailWrapper />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  </Provider>
  );
}

const ItemDetailWrapper = () => {
  const params = useParams();

  return <ItemDetail id={params.id} />;
};

export default App;

// import React from 'React'
import './App.css'
import ProductsProvider from './contexts/productsContext';
import Main from './pages/Main';

const App = () => {
  return (
    <ProductsProvider>
      <Main />
    </ProductsProvider>
  );
}

export default App;

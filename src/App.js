import { Icon } from '@mui/material';
import './App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { productsList } from './data.js';
import { useState } from 'react';
import s from './data.js'
import { ClassNames } from '@emotion/react';

function Products(){
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    if (index < productsList.length - 1) {
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let product = productsList[index];
  return (
    <>
     <img
      src = {product.thumbnail}
     />
     <h2>
      <i>{product.title}</i>
     </h2>
     <h2>${product.price}</h2>
     <p>{product.brand}</p>
     <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'More...'} 
      </button>
      {showMore && <p>{product.description}</p>}
    </>
  );
}


function App() {
  return (
    <div class="App"> 
      <header>
        <h2>Shopify</h2>
      </header>
      <section>
        <h2>Products</h2>    
        <div className='ff'>  
          <div className='ddd'><Products></Products></div>
        </div>
      </section>
    </div>
  );
}

export default App;

import { ProductArea, Title, Span, Image, Button } from './styles';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs';


import { getItem, setItem } from '../../services/LocalStorageFuncs';

const Store = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(getItem('carrinhoYt') || []);


  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get('https://api.mercadoLibre.com/sites/MLB/search?q=celular');
       setProducts(data.results);
    }
    fetchProduct();
  },[]);

  const handleAddcart = (productId) => {
    console.log(productId)
    const productAlreadyInCart = cart.find((product) => product.id === productId.id)
    if(productAlreadyInCart) {
      const arrFilter = cart.filter((product) => product.id !== productId.id);
      setCart(arrFilter);
      setItem('carrinhoYt', arrFilter);
    } else {
      setCart([...cart, productId]);
      setItem('carrinhoYt', [...cart, productId]);
    }
  }


  return (
    <>
    <Link to="/cart">Carrinho</Link>
      <ProductArea>
      
      {
        products.map((product) => (
            <div className="container-card" key={product.id}>
              <Title>{product.title}</Title>
              <Span>R$ {product.price}</Span>
              <Image src={product.thumbnail} alt={product.title} />
              <Button onClick={() => handleAddcart(product)}>
                {
                  cart.some((itemCart) => itemCart.id === product.id) 
                  ? <BsFillCartCheckFill />
                  : <BsFillCartPlusFill />
                }
              </Button>
            </div>
          ))
      }
    </ProductArea>
    </>
  )
}

export default Store
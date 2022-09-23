import { ProductArea, Title, Span, Image, BtnGroup, Button } from './styles';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs';
import {RiShoppingBasketFill} from 'react-icons/ri';


import { getItem, setItem } from '../../services/LocalStorageFuncs';
import Header from '../../components/Header';

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
      <Header to="/compras">Meu Carrinho <RiShoppingBasketFill /></Header>
      <ProductArea>
      
      {
        products.map((product) => (
            <div className="container-card" key={product.id}>
              <Image src={product.thumbnail} alt={product.title} />
              <Title>{product.title}</Title>
              <Span>R$ {product.price}</Span>
              <BtnGroup>
              <Button onClick={() => handleAddcart(product)}>
                {
                  cart.some((itemCart) => itemCart.id === product.id) 
                  ? <div className="teste"><BsFillCartCheckFill /><span>Adicioando</span></div> 
                  : <><BsFillCartPlusFill /></>
                }
              </Button>
              </BtnGroup>
            </div>
          ))
      }
    </ProductArea>
    </>
  )
}

export default Store
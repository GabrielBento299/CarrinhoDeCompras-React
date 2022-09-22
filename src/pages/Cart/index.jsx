import { ProductArea, Title} from '../Store/styles';

import { useState } from "react";
import { getItem, setItem } from "../../services/LocalStorageFuncs";

import { BsFillCartDashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [data, setData] = useState(getItem('carrinhoYt') || []);

  const removedItem = (favoritesId) => {
    const newFavorites = data.filter((favorite) => favorite.id !== favoritesId.id);
    setData(newFavorites);
    setItem('carrinhoYt', newFavorites);
}


  return (
    <div>
        <Link to="/">Voltar</Link>
        <>
            {
                data.length > 0 
                 ? <h1>Seu Carrinho</h1>
                 : <h1>Carrinho Vazio</h1>
            } 

            <ProductArea>

            {
                data.map((favorites) => (
                 <div className="container-card" key={favorites.id}>
                        <Title>{favorites.title}</Title>  
                        <span>R$ {favorites.price}</span>
                        <p>Quantidades: {favorites.available_quantity}</p>
                        <img src={favorites.thumbnail} alt={favorites.title} />
                        <button onClick={() => removedItem(favorites)}>
                            {<BsFillCartDashFill />}
                        </button>
                    </div>    
                ))
            }
            </ProductArea>
        </>
    </div>
  )
}

export default Cart
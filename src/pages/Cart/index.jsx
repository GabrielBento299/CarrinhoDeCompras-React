import { ProductArea, Title, Span, Image, Button} from '../Store/styles';

import { Mensagem } from './styles';

import { useState } from "react";
import { getItem, setItem } from "../../services/LocalStorageFuncs";

import { BsFillCartDashFill } from 'react-icons/bs';
 
import Header from '../../components/Header';

const Cart = () => {
  const [data, setData] = useState(getItem('carrinhoYt') || []);

  const removedItem = (favoritesId) => {
    const newFavorites = data.filter((favorite) => favorite.id !== favoritesId.id);
    setData(newFavorites);
    setItem('carrinhoYt', newFavorites);
}


  return (
    <div>
        
        <Header to="/">Home</Header>
        
        <>
        <div>
            {
                data.length > 0 
                 ? <Mensagem>Suas Compras: {data.length}</Mensagem>
                 : <Mensagem>Carrinho Vazio</Mensagem>
            } 
        </div>
         

            <ProductArea>

            {
                data.map((favorites) => (
                 <div className="container-card" key={favorites.id}>
                        <Image src={favorites.thumbnail} alt={favorites.title} />
                        <Title>{favorites.title}</Title>  
                        <Span>R$ {favorites.price}</Span>
                        <p>Quantidades: {favorites.available_quantity}</p>
                        <Button onClick={() => removedItem(favorites)}>
                            {<BsFillCartDashFill />}
                        </Button>
                    </div>    
                ))
            }
            </ProductArea>
        </>
    </div>
  )
}

export default Cart
import { Switch, Route} from 'react-router-dom';

import Store from './pages/Store';
import Cart from './pages/Cart';


 
const Content = () => {
  return (
     <Switch>
        <Route exact path="/" component={Store} />
        <Route exact path="/compras" component={Cart} />
     </Switch>
  )
}

export default Content

import {NavBar} from './components/NavBar';

import { Fragment} from 'react/cjs/react.production.min';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';



function App() {

  //Aumentamos el carrito
  const [carrito,setCarrito]=useState([])
  const [numero,setNumero]=useState(0)
  

  return (
    <Fragment>
      <NavBar
      numero={numero}
      />
       
     
      <ItemListContainer
       carrito={carrito}
       numero={numero}
       setNumero={setNumero}
      />

     

    </Fragment>
  );
}

export default App;



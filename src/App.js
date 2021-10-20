
import {NavBar} from './components/NavBar';
import { Fragment} from 'react/cjs/react.production.min';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';



function App() {

const titulo="carrito vacio";

//Aumentamos el carrito

const [numero,setNumero]=useState(0)


const sumar =()=>{

    setNumero(numero+1)
    console.log('Me diste click')
}

const restar =()=>{
setNumero(numero-1)

}

  return (
    <div>
      <NavBar
      numero={numero}
      />
      <ItemListContainer
       greeting='Lo que necesitas para el deporte' 
      />

        <div className="container">
          <div className="one-half column">
           <h2>Lista de productos</h2>

              <div className="card">
                <img className="card-img-top"></img>
                <div className="card-body">
                  <h5 className="card-title">Paleta</h5>
                <p className="card-text">Paleta importada ideal para tu uso diario</p>

                <button className="btn btn-success"
                onClick={sumar}
                
                >comprar </button>
                <span></span>
                <button className="btn btn-danger"
                onClick={restar}
                >disminuir compra</button>
                </div>
              </div>
           


          </div> 
          <div className="one-half column">
             <h2>{titulo}</h2>


         
          </div>

        </div>


    </div>
  );
}

export default App;

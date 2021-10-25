
import {NavBar} from './components/NavBar';
import { Fragment} from 'react/cjs/react.production.min';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';
import img, {img1} from './assets/img'


function App() {

const titulo="carrito vacio";

//Aumentamos el carrito
const [carrito,setCarrito]=useState([])
const [numero,setNumero]=useState(0)

//carrito de paletas
const [paletas,setPaletas]=useState([]);
//carrito de remera
const [indumentaria,setRemera]=useState([]) 
//carrito de bolso
const [bolsoPaletero,setBolso]=useState([])


// Datos de la paleta

const paleta = {
  name:"Paleta Sidespin",
  precio:15000,
  peso:"400 g",
  id:"001",
  stock:5
}

//Datos de indumentaria

 const remera = {
  name:"remera",
  precio:3500,
  marca:"bullpadel",
  id:"002",
  stock:4
}
//Datos de bolso paletero

const bolso = {
  name:"bolso",
  precio:8000,
  marca:"bullpadel",
  id:"003",
  stock:6
}


//Sumar paleta al carrito y  Validacion de stock
 

const comprarPaleta =()=>{

  if(paletas.length<5){

    setCarrito([
      ...carrito,paleta
    ])
    setPaletas([
      ...paletas,paleta
    ])

       // console.log(carrito)
      setNumero(numero+1)

    console.log(paletas)
  }
  }



 // Sumar bolso al carrito


 const comprarBolso = () =>{

  if(bolsoPaletero.length<6){
   setCarrito([   ...carrito,
    bolso]);

    setBolso([
      ...bolsoPaletero,bolso
    ])
    
   // console.log(carrito)
    setNumero(numero+1)
  }
 }

//Sumar al carrito Remera deportiva


const comprarRemera=()=>{
  if(indumentaria.length<6){
  setCarrito([...carrito,remera])
  setRemera([...indumentaria,remera])
   // console.log(carrito);
    setNumero(numero+1)
  }
}


//Restar carrito
const restar =()=>{
if(numero<=0)
{
  setNumero(numero==0);
  
}
else{
  setNumero(numero-1)
}}

// Mensajes de Stock
//const mensajePaleta = paletas.length>4? "Ya no contamos con Stock de paletas" : null ;
//const mensajeBolso = bolsoPaletero.length>5? "Ya no contamos con stock de bolsos" : null;
//const mensajeRemera =indumentaria.length>4 ? "Ya no contamos con stock de remeras" : null;

  return (
    <div>
      <NavBar
      numero={numero}
      />
      <ItemListContainer
       greeting='Lo que necesitas para el deporte'
       carrito={carrito}
       paleta={paleta}
      />

        

        <div className="container">
          <div className="one-half column">
           <h2>Lista de productos</h2>


              {paletas.length>4? <p className="alerta-error"> "Ya no contamos con Stock de paletas"</p>: null}
              <div className="card" >
                <img className="card-img-top"
                src={img.img1}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Paleta</h5>
                <p className="card-text">Paleta importada ideal para tu uso diario</p>

                <button className="btn btn-success"
                onClick={comprarPaleta}
                
                
                >comprar </button>
                <span></span>
                <button className="btn btn-danger"
                onClick={restar}
                >disminuir compra</button>
                </div>
              </div>
              <br></br>
              {numero<=0? <p className="alerta-error">Debe agregar al carrito</p>: null}
              <br></br>


              {bolsoPaletero.length>5? <p className="alerta-error"> "Ya no contamos con stock de bolsos" </p> : null};
              <div className="card">
                <img className="card-img-top"
                src={img.img2}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Bolso Paletero</h5>
                <p className="card-text">Paleta importada ideal para tu uso diario</p>

                <button className="btn btn-success"
                onClick={comprarBolso}
                
                >comprar </button>
                <span></span>
                <button className="btn btn-danger"
                onClick={restar}
                >disminuir compra</button>
                </div>
              </div>

              <br></br>
              {numero<=0? <p className="alerta-error">Debe agregar al carrito</p>: null}
              <br></br>

              
              {indumentaria.length>4 ? <p className="alerta-error">"Ya no contamos con stock de remeras" </p>: null};
              <div className="card">
                <img className="card-img-top"
                src={img.img2}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Remera deportiva</h5>
                <p className="card-text">Paleta importada ideal para tu uso diario</p>

                <button className="btn btn-success"
                onClick={comprarRemera}
                
                >comprar </button>
                <span></span>
                <button className="btn btn-danger"
                onClick={restar}
                >disminuir compra</button>
                </div>
              </div>
              <br></br>
              {numero<=0? <p className="alerta-error">Debe agregar al carrito</p>: null}



           


          </div> 


          <div className="one-half column">
             <h2>{titulo}</h2>


         
          </div>

        </div>


    </div>
  );
}

export default App;



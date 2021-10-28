import {React,useState} from 'react';
import { Fragment } from 'react/cjs/react.production.min';
//import img from './assets/img';

export default function CartWidgetBolso({numero,setNumero}) {

    //CARRITO DE BOLSO

const [bolsoPaletero,setBolso]=useState([]);

//Datos de bolso paletero

const bolso = {
    name:"bolso",
    precio:8000,
    marca:"bullpadel",
    id:"003",
    stock:6
  }

   // Sumar bolso al carrito


 const comprarBolso = () =>{

    if(bolsoPaletero.length<6){
     //setCarrito([...carrito,bolso]);
      setBolso([...bolsoPaletero,bolso])
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

    /*<img className="card-img-top"
                    src={img.img1}
                    ></img>*/

    return (
        <Fragment>
            {bolsoPaletero.length>4 ? <p className="alerta-error">"Ya no contamos con stock de remeras" </p>: null};
                    <div className="card">
                    



                    <div className="card-body">
                        <h5 className="card-title">Remera deportiva</h5>
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
        </Fragment>
    )
}

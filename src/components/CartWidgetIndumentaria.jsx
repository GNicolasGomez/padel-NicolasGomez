import {React,Fragment,useState} from 'react';
//import img from './assets/img';


export default function CartWidgetIndumentaria({numero,setNumero}) {

//CARRITO DE REMERA

const [indumentaria,setRemera]=useState([]) ;

//Datos de indumentaria

const remera = {
    name:"remera",
    precio:3500,
    marca:"bullpadel",
    id:"002",
    stock:4
  }

  //Sumar al carrito Remera deportiva


const comprarRemera=()=>{
    if(indumentaria.length<6){
    //setCarrito([...carrito,remera])
    setRemera([...indumentaria,remera]);
      setNumero(numero+1)
      console.log(numero)
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
                    src={img.img2}
                    ></img>*/


    return (
      <Fragment>
          {indumentaria.length>5? <p className="alerta-error"> "Ya no contamos con stock de bolsos" </p> : null};
                    <div className="card">
                    


                    <div className="card-body">
                        <h5 className="card-title">Bolso Paletero</h5>
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
      </Fragment>
    )
}

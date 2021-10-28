import {React,Fragment,useState} from "react";
//import  img from './assets/img';

const CartWidget = ({numero,setNumero}) => {

        // CARRITO DE PALETAS

 const [paletas,setPaletas]=useState([]);

// Datos de la paleta

const paleta = {
    name:"Paleta Sidespin",
    precio:15000,
    peso:"400 g",
    id:"001",
    stock:5
  }

  //Sumar paleta al carrito y  Validacion de stock
 

const comprarPaleta =()=>{

    if(paletas.length<5){
  
     // setCarrito([...carrito,paleta])
      setPaletas([...paletas,paleta])
      setNumero(numero+1)
  
      console.log(paletas)
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
                    src={img.img1}
                    ></img>*/
                    
    
                    const respuesta = (paletas)=> new Promise ((resolve,regect)=>{
            
                      if(paletas)
                      {
                          resolve(console.log("entro por el resolve"))
                      }
                      else {
                          regect(console.log("entro por el regect"))
                      }
              
              
              })
              setTimeout(respuesta,3000)                

    
    return (  
        <Fragment>
                

                    {paletas.length>4? <p className="alerta-error"> "Ya no contamos con Stock de paletas"</p>: null}
                    <div className="card" >
                    


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



                    
        </Fragment>
    );
}
 
export default CartWidget;
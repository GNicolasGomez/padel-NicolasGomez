import {React,Fragment} from "react";
import CartWidget from "./CartWidget";
import CartWidgetBolso from "./CartWidgetBolso";
import CartWidgetIndumentaria from "./CartWidgetIndumentaria";


const ItemListContainer = ({numero,setNumero}) => {






    return ( 

            <Fragment>
      
                <div className="container">
                    <div className="one-half column">
                            <h2>Lista de productos</h2>
                            <CartWidget
                            numero={numero}
                            setNumero={setNumero}
                            />
                            <CartWidgetIndumentaria
                            numero={numero}
                            setNumero={setNumero}
                            />
                            <CartWidgetBolso
                            numero={numero}
                            setNumero={setNumero}
                            />
                    </div> 
                    <div className="one-half column">
                        <h2>No hay nada en el carrito</h2>
                    </div>

                 </div>
               
            </Fragment>
     );
}
 
export default ItemListContainer;
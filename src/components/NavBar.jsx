import { React, useState } from "react";
import CartWidget from "./CartWidget";

export const NavBar = ({numero}) => {

    
   
    return (
        <div>
             <h1>Mundo Padel</h1>

        <div className="container d-flex flex-row-reverse">
               <li><CartWidget
                numero={numero}
               /></li>
        </div>

        </div>
    )
}


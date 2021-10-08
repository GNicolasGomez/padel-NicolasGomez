
export const NavBar = () => {

   
    return (
        <div>
             <h1 className="title">Mundo Padel</h1>

        <div className="contenedor">
           

           <ul className="menu">
               <li  onClick={()=>{alert("Me diste click")}}><a href="http://">Paletas</a></li>
               <li><a href="http://">Indumentaria</a></li>
               <li><a href="http://">Accesorios</a></li>
               <li><a href="http://">Bolsos</a></li>
               <li><a href="http://">Suplementos</a></li>
           </ul>
        </div>
        </div>
    )
}

export default NavBar

import logo from 'media/logoAnt.ico';

const header = ()=>{return(
<div>
<ul className="navbar">
          <div className='seccionHeadLeft'> 
          <li><img src={logo} alt="imagen" className="logo"></img>
          </li>
          <li><button className="botonGenerico mainButton ">Home</button></li>
          </div>
         <div className='seccionHeadRight'>
         <li><button className="botonGenerico secundaryButton ">Iniciar Sesión</button>
            </li>
          <li><button className="botonGenerico mainButton ">Registrarse</button>
            </li>
         </div>

        </ul>
</div>
)}

export default header;

import React ,{useEffect} from 'react';

import './Mensaje.css';


function Mensaje(props){

useEffect(()=>{
    setTimeout(()=>{
        props.cerrarModal()
    },1500);
});
    return(
        <>
        <h2 className="mensajeIndicador">{props.msg_exitoso}</h2>
        </>
    )
}


export default Mensaje;
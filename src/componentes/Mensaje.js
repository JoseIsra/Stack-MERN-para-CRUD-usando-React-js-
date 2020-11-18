import React ,{useEffect} from 'react';

function Mensaje(props){

useEffect(()=>{
    setTimeout(()=>{
        props.cerrarModal()
    },1500);
});
    return(
        <>
        <h2>{props.msg_exitoso}</h2>
        </>
    )
}


export default Mensaje;
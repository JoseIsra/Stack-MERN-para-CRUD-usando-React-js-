import React ,{useState} from 'react';
import Axios from 'axios';
import {Link, useHistory, Redirect} from 'react-router-dom';
import './Carta.css';



function Carta({nombre, genero ,consola, id, hacerCambios}){

    

    const borrarCarta = (id)=>{
        hacerCambios(id);
        Axios.delete(`http://localhost:3001/juegos/${id}/delete`)
        .then(()=>{   
            console.log("borrado...");
        }).catch(error=>console.log(error)); 
    }



    return (
            <div className="carta">
                <div className="carta__contenido">
                    <h4>{nombre}</h4>
                    <div className="campos">
                        <label>NOMBRE</label>
                        <p>{nombre}</p>
                    </div>
                    <div className="campos">
                        <label>GENERO</label>
                        <p>{genero}</p>
                    </div>
                    <div className="campos">
                        <label>CONSOLA</label>
                        <p>{consola}</p>
                    </div>
                    <div className="botones">
                    <Link className="editar" to={`/juegos/ver/${id}`} >Editar</Link>
                    <button onClick={()=>borrarCarta(id)}>Borrar</button>
                    </div>
                </div>
            </div>
    )
}


export default Carta;
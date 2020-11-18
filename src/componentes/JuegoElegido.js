import React, {useEffect, useState } from 'react';
import axios from 'axios';
import  { Link, useHistory, useParams } from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';

import './JuegoElegido.css';

function JuegoElegido() {
    const [juegoAEditar, setJuegoAEditar] = useState({
        nombre:'',
        genero:'',
        consola:''
    });
    
    const {id} = useParams();
    let history = useHistory();
        const manejarInput = (e)=>{
            setJuegoAEditar({
                ...juegoAEditar,
                [e.target.name]:e.target.value
            });
        }

        
        //TRAEMOS LOS DATOS DE LA BD DEL JUEGO CON LA ID RESPECTIVA
        useEffect(()=>{
            axios.get(`http://localhost:3001/juegos/ver/${id}`)
            .then((response)=>{
                setJuegoAEditar({
                    ...juegoAEditar,
                    nombre:response.data.nombre,
                    genero:response.data.genero,
                    consola:response.data.consola
                })
            })
        },[]);

        const enviarForm = (e)=>{
            e.preventDefault();
            axios.post(`http://localhost:3001/juegos/ver/${id}`,{
                nombre:juegoAEditar.nombre,
                genero:juegoAEditar.genero,
                consola:juegoAEditar.consola,
            }).then(res=>{
                
                history.push('/juegos');
            }) 
        }


    return (
        <section className="crud-body">
            <Link className="enlace" to="/juegos">Volver a lista de juegos</Link>
            <h1 className="edicion">ZONA DE EDICION</h1>
            <div className="crud__container">
            <div className="encabezados">
                <h1>JUEGO</h1>
                <h2>{juegoAEditar.nombre}</h2>
                </div>

                <div className="crud__content">
                    <form autoComplete="off" onSubmit={enviarForm}>
                        <p>Nombre</p>
                        <input type="text"
                            value={juegoAEditar.nombre}
                            onChange={manejarInput}
                            name="nombre"
                        />
                        <p>Género</p>
                        <input type="text"
                            value={juegoAEditar.genero}
                            onChange={manejarInput}
                            name="genero"
                        />
                        <p>Consolas</p>
                        <input type="text"
                            value={juegoAEditar.consola}
                            onChange={manejarInput}
                            name="consola"
                        />
                        <button className="btn-guardar"
                            type="submit" 
                            >GUARDAR
                        <SaveIcon />    
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );


}


export default JuegoElegido;
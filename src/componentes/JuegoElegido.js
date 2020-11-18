import React, {useEffect, useState } from 'react';
import axios from 'axios';
import  { Link, useHistory, useParams } from 'react-router-dom';


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

        const enviarForm = ()=>{
        
            axios.post(`http://localhost:3001/juegos/edit/${id}`,{
                nombre:juegoAEditar.nombre,
                genero:juegoAEditar.genero,
                consola:juegoAEditar.consola,
            }).then(()=>{
                history.push('/');
            }) 
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

    return (
        <section >
            <Link className="enlace_ver_juegos" to="/juegos">Volver a lista de juegos</Link>

            <div className="crud__container">
                <div className="crud__content">
                    <h1>{juegoAEditar.nombre}</h1>

                    <form >
                        <label>Nombre</label>
                        <input type="text"
                            value={juegoAEditar.nombre}
                            onChange={manejarInput}
                            name="nombre"
                        />
                        <label>Género</label>
                        <input type="text"
                            value={juegoAEditar.genero}
                            onChange={manejarInput}
                            name="genero"
                        />
                        <label>Consolas</label>
                        <input type="text"
                            value={juegoAEditar.consola}
                            onChange={manejarInput}
                            name="consola"
                        />
                        <button className="btn-guardar"
                            type="submit" 
                            onClick={enviarForm}
                            >GUARDAR </button>
                    </form>
                </div>
            </div>
        </section>

    );


}


export default JuegoElegido;
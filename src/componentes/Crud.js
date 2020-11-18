
import { Link } from 'react-router-dom';
import Axios from 'axios';
import React, {useState} from 'react';
import './Crud.css';

import Mensaje from './Mensaje';
function Crud(){
    const[game, setGame] = useState({
        nombre:'',
        genero:'',
        consola:''
    });

    const [modal, setModal]= useState(false);
        const cerrarModal = ()=>{
            setModal(false);
        }
    const manejarInput = (e)=>{
        setGame({
            ...game,
            [e.target.name]:e.target.value
        })
    }
    const enviarData= async(e)=>{
        e.preventDefault();
        try {
            setModal(true);
            setGame({
            nombre:'',
            genero:'',
            consola:''
                
            })
            await Axios.post('http://localhost:3001/crud/add',{
                nombre:game.nombre,
                genero:game.genero,
                consola:game.consola
            })
        } catch (error) {
            console.log(error);
        }
    }



    return(
        <section >
            {modal && <Mensaje msg_exitoso={"Juego guardado"} cerrarModal ={cerrarModal} /> }
            <div className="crud__container">
            <div className="crud__content">
    <h1>{game.nombre}</h1>

                <form>
                    <label>Nombre</label>
                    <input type="text" 
                    placeholder="el juego es..." 
                    value={game.nombre}
                    onChange = {manejarInput}
                    name="nombre"
                    />
                    <label>Género</label>
                    <input type="text" 
                    placeholder="el género es..." 
                    value={game.genero}
                    onChange = {manejarInput}
                    name="genero"
                    />
                    <label>Consolas</label>
                    <input type="text" 
                    placeholder="consolas compatibles..." 
                    value={game.consola}
                    onChange = {manejarInput}
                    name="consola"
                    />
                    <button className="btn-guardar" 
                    onClick={enviarData}
                    type="submit">GUARDAR </button>
                </form>
            </div>
            <Link className="enlace_ver_juegos" to="/juegos">Ver lista de juegos</Link>
            </div>
        </section>

    );


}



export default Crud;

import { Link } from 'react-router-dom';
import Axios from 'axios';
import React, {useState} from 'react';
import './Crud.css';
import SaveIcon from '@material-ui/icons/Save';

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
        <section>
            <h1 className="crudSaludo">AGREGAR UN VIDEOJUEGO DEBES </h1>
<Link className="enlace" to="/juegos">Ver lista de juegos</Link>
            {modal && <Mensaje className="mensaje"    msg_exitoso={"Juego guardado"} cerrarModal ={cerrarModal} /> }
            <div className="crud__container">
                <div className="encabezados">
                <h1>JUEGO NUEVO</h1>
                <h2>{game.nombre}</h2>
                </div>
            <div className="crud__content">
                <form autoComplete="off">
                    <p>Nombre</p>
                    <input type="text" 
                    placeholder="el juego es..." 
                    required
                    value={game.nombre}
                    onChange = {manejarInput}
                    name="nombre"
                    />
                    
                    <p>Género</p>
                    <input type="text" 
                    placeholder="el género es..." 
                    required
                    value={game.genero}
                    onChange = {manejarInput}
                    name="genero"
                    />
                    
                    <p>Consolas</p>
                    <input type="text" 
                    placeholder="consolas compatibles..." 
                    value={game.consola}
                    onChange = {manejarInput}
                    name="consola"
                    required
                    />
                    
                    <button className="btn-guardar" 
                    onClick={enviarData}
                    type="submit">GUARDAR 
                    <SaveIcon  />
                    </button>
                </form>
            </div>
            </div>
        </section>

    );


}



export default Crud;
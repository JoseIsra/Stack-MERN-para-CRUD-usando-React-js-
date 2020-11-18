
import React, {useEffect, useState} from 'react';
import './ListaJuegos.css';
import Carta from './Carta';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function ListaJuegos(){
    const [games ,setGames] = useState([]);

    const hacerCambios =(elid)=>{
        setGames((games)=>{
            return games.filter( game=> game.id !== elid);
        })
    }


    useEffect(()=>{
        Axios.get('http://localhost:3001/juegos')
        .then(resultados => {
            setGames(resultados.data);
        }).catch(error => console.log(error))
    },[]);

    return(
            <main>

                <h1 className="titulo">CONTEMPLA LO AGREGADO</h1>
                <Link className ="volver_crud" to="/crud" >Volver al CRUD</Link>
                <div className="games__container">
                    {games.map(game => {
                        return <Carta 
                        hacerCambios={hacerCambios}
                        key= {game.id} {...game} />
                    })}
                </div>
            </main>
        );

}



export default ListaJuegos;
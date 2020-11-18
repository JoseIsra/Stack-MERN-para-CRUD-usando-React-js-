
import React from 'react';
import {Link} from 'react-router-dom';
import './Inicio.css';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

function Inicio(){

    return (
    <div className="portada">
            <h1>CRUD CON REACT</h1>

            <h2>STACK MERN</h2>

            <ul>
                <li>M ----MYSQL 😁 </li>
                <li>E---- EXPRESS 🚀🚀 </li>
                <li>R --- REACT 😎</li>
                <li>N---- NODE ✈✈</li>
            </ul>

            <Link className="enlace_crud" to="/crud">Ir al CRUD 
            <EmojiPeopleIcon />
            </Link>
    </div>              
);
}



export default Inicio;
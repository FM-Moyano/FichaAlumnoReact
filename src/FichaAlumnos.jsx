//ficha alumno 
import React from 'react';
import './FichaAlumno.css';
import img from './img/alumno.JPG';
//ficha alumno con nombre, direccion, localidad y cp
const FichaAlumno = (props) => {
    return (
        //foto a la izquierda
        
        <div className="FichaAlumno">
            <div className='foto'>
                <img src={img} alt="foto alumno" />
            </div>
            <div className='datos'>
                <h1>Nombre:{props.nombre}</h1>
                <p>Direccion:{props.direccion}</p>
                <p>Localidad:{props.localidad}</p>
                <p>CP:{props.cp}</p>
            </div>
            
        </div>
    );

    }



export default FichaAlumno;

import React from 'react';

function Nav ({nombre,contarPreguntas,ocultarcontador}){
    return(
        <nav>
            <p className="parrafo-nav"> Bienvenodo/a {nombre}</p>
            <p className={ocultarcontador}>Pregunta {contarPreguntas} de 10</p>
            <hr/>
        </nav>
    )
}
export default Nav;
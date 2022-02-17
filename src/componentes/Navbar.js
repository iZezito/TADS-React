import React from "react";
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default _ =>{
    return(

        <nav className="navbar navbar-expand-lg navbar-dark fundoNav">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link to="/" className="nav-link active">Apresentaçao</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/api" className="nav-link active" >API</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato" className="nav-link active" >Contato</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pedagogico" className="nav-link active" >Projeto Pedagógico do Curso</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/noticias" className="nav-link active">Notícias</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Documentos</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>


    );
}
import React from "react";
import Tads from "./nometads.png"

export default _ => {
    return(
        <header className="container-fluid pt-2">
            <div className="row">
                <figure className="col-md-3">
                    <img src={Tads} className="img-fluid rounded-start pt-2" alt="logo TADS"/>

                </figure>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-primary">Curso de Análise e Desenvolvimento de Sistemas/EAJ</h5>

                        <p className="card-text text-info float-end ps-4">Telefone/Ramal: (84) 3342-2297/227 </p>


                        <p className="card-text">ESCOLA AGRÍCOLA DE JUNDIAÍ-EAJ</p>
                        <small className="card-text text-info">http://www.graduacao.ufrn.br/tads</small>
                    </div>
                </div>

            </div>
        </header>
    );


}
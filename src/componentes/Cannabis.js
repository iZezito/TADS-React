import News from "./News.jpg";
import React from "react";
import diamba from "./diamba.png"

export default ({medical_use, category, type, cannabinoid, cannabinoid_abbreviation, health_benefit}) =>{
    return(
        <article className="col-xl-6 pt-2">
            <div className="card sombra sombraCard w-100">
                <figure>
                    <img src={diamba} className="card-img-top" alt="diambation"/>
                </figure>
                <div className="card-body">
                    <h5 className="card-title">Canabinóide: {cannabinoid}</h5>
                    <p className="card-text"><strong>Abreviação: </strong>{cannabinoid_abbreviation}</p>
                    <p className="card-text"><strong>Tipo: </strong> {type}</p>
                    <p className="card-text"><strong>Categoria: </strong>{category}</p>
                    <p className="card-text"><strong>Uso Médico: </strong>{medical_use}</p>
                    <p className="card-text"><strong>Benefícios: </strong>{health_benefit}</p>



                    <a href="#" className="btn btn-primary">Saber mais...</a>
                </div>
            </div>

        </article>

    )


}
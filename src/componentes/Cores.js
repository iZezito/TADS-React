import React from "react";

export default ({color_name, hex_value}) =>{

    return(
        <article className="col pt-4">
            <div className="card sombra sombraCard justify-content-evenly" style={{borderColor: hex_value}}>
                <div className="img-fluid" style={{backgroundColor: hex_value, width: 286, height:100}}></div>
                <div className="card-body">
                    <h5 className="card-title">Nome: {color_name}</h5>
                    <p id="hex" className="card-text"><strong>Hexadecimal: </strong>{hex_value}</p>

                </div>
            </div>

        </article>

    )


}
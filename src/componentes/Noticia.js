import React from "react";

export default ({data, hora, noticia}) =>{
    return(

        <tr>
            <td className="table-active">{data}</td>
            <td className="table-active">{hora}</td>
            <td className="table-active">{noticia}</td>
        </tr>




    )
}
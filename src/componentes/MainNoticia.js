import React from "react";
import {dadosNoticia} from "./Dados";
import Noticia from "./Noticia";

export default _ =>{
    return(

                <main className="table-responsive pt-2">


                    <table className="table align-middle caption-top">
                        <caption>Notícias</caption>

                        <thead className="table-dark" style={{backgroundColor: "#000"}}>
                            <th className="table-active">Data</th>
                            <th className="table-active">Hora</th>
                            <th colSpan="2" className="table-active">Notícia</th>
                        </thead>
                        <tbody>
                        {
                            dadosNoticia.map((item) =>{
                                return(<Noticia key={item.id} {...item}/>)

                            })
                        }




                        </tbody>
                    </table>


                </main>





    );
}
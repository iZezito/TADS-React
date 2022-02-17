import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import Navbar from "./componentes/Navbar";
import Principal from "./componentes/Main";
import Rodape from "./componentes/Rodape";
import {Route, Routes} from "react-router-dom";
import MainNoticia from "./componentes/MainNoticia";
import MainPedagogico from "./componentes/MainPedagogico";
import Api from "./componentes/Api";
import Contato from "./componentes/Contato";


function App() {
  return (
     <>
        <div className="container-fluid central">
          <Cabecalho/>
            <Navbar/>
            <Routes>

                <Route path="/" element={<Principal />}/>
                <Route path="/noticias" element={<MainNoticia />}/>
                <Route path="/pedagogico" element={<MainPedagogico />}/>
                <Route path="/api" element={<Api/>}/>
                <Route path="/contato" element={<Contato/>}/>

            </Routes>


        </div>

         <Rodape/>
     </>
  );
}

export default App;

import React, {useEffect, useState} from "react";
import Cannabis from "./Cannabis";


export default () =>{

    const url = 'https://random-data-api.com/api/cannabis/random_cannabis?size=12'

    const [diamba, setDiamba] = useState([])


    const carregaDiamba = async () =>{
        const resposta = await fetch(url)
        const dadosJson = await resposta.json()
        setDiamba(dadosJson)

    }


    useEffect( () =>{
        carregaDiamba()


    }, [])


    return(
        <main className="container-fluid centralizado pt-2">
            <div className="row pb-2">
                {
                    diamba.map((item) =>{
                        return(
                            <Cannabis key={item.id} {...item}/>

                        )
                    })


                }


            </div>
        </main>



    )

}
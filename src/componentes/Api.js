import React, {useEffect, useState} from "react";
import Cannabis from "./Cannabis";


export default () =>{

    const url = 'https://random-data-api.com/api/color/random_color?size=60'

    const [cor, setCor] = useState([])


    const carregarCor = async () =>{
        const resposta = await fetch(url)
        const dadosJson = await resposta.json()
        setCor(dadosJson)

    }


    useEffect( () =>{
        carregarCor()


    }, [])


    return(
        <main className="container pt-2">
            <div className="row pb-2">
                {
                    cor.map((item) =>{
                        return(
                            <Cannabis key={item.id} {...item}/>

                        )
                    })


                }


            </div>
        </main>



    )

}
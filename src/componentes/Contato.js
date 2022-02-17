export default () =>{
    return(
        <>
            <h1 className="display-1 text-center">contate-nos</h1>

            <form action="#">
                <div className="mb-3 p-2 w-75 mx-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Digite seu nome..."/>
                </div>
                <div className="mb-3 p-2 w-75 mx-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3 p-2 w-75 mx-auto">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensagem</label>
                    <input className="form-control" id="exampleFormControlTextarea1" rows="3" style={{height:85}}></input>
                    <button type="button" className="btn btn-primary mt-2">Enviar</button>

                </div>
            </form>
        </>


    )

}
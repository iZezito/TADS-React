import React from "react";
import Eaj from "./capa.jpg"
import News from "./News.jpg"
import Calen from "./foto-calenda-769-rio.jpg"


export default _ =>{
    return(
        <main>

            <h1 className="fs-4 ps-4">Apresentação</h1>
            <article className="container-fluid centralizado pt-2">


                <figure>
                    <img src={Eaj} className="img-fluid float-start pt-2" alt="..."/>
                        <p>O Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) tem como
                            objetivo a formação de profissionais capazes de compreender o processo de construção e
                            reconstrução do conhecimento no domínio da análise e desenvolvimento de sistemas e,
                            dessa forma, realizar atividades de concepção, especificação, projeto, implementação,
                            avaliação, suporte e manutenção de sistemas computacionais, orientando sua ação na
                            sociedade em geral e no mundo do trabalho em particular para a busca de soluções para o
                            setor produtivo (notadamente o setor primário da economia) e para a melhoria da qualidade
                            de vida das populações. Os profissionais formados atuarão na área de análise e
                            desenvolvimento de sistemas, podendo exercer atividades no campo da análise de sistemas,
                            engenharia de software, gerência de projetos e administração de bancos de dados.

                        </p>
                </figure>

                <p className="pt-4">
                    Além da formação geral em Tecnologia em Análise e Desenvolvimento de Sistemas, o curso tem
                    objetivo de promover a integração entre as ciências agrárias e a denominada Tecnologia da
                    Informação (TI) com suas diversas subáreas, obtendo-se assim uma gama de benefícios e
                    ampliação do espectro de formação profissional em nível superior, considerando que um curso
                    desta natureza permitirá ao egresso propor soluções tecnológicas em software e/ou hardware para
                    as ciências agrárias ou, usando uma nomenclatura mais específica e mercadológica, para a cadeia
                    do agronegócio e da agricultura familiar, sendo, nesse sentido estratégico para o desenvolvimento
                    regional e nacional. Tais objetivos baseiam-se na formação de Tecnólogos com capacidade
                    técnico-científica e visão integral, ética e humanística, comprometidos com o bem estar da
                    sociedade envolvida e com o desenvolvimento sustentável, exercendo todas as competências
                    relacionadas à profissão.
                </p>


            </article>
            <div className="container-fluid centralizado pt-2">

                <div className="row pb-2">
                    <article className="col-xl-6 pt-2">
                        <div className="card sombra sombraCard">
                            <figure>
                                <img src={News} className="card-img-top" alt="..."/>
                            </figure>
                            <div className="card-body">
                                <h5 className="card-title">Calendário</h5>
                                <p className="card-text"><strong>30/09/2021 - 07/10/2021</strong></p>
                                <p className="card-text ps-2">· Matrícula para o período 2021.2.</p>
                                <p className="card-text"><strong>04/10/2021</strong></p>
                                <p className="card-text ps-2">· Matrícula para o período 2021.2.</p>
                                <p className="card-text"><strong>04/10/2021</strong></p>
                                <p className="card-text ps-2">· Início do período letivo 2021.2.</p>
                                <p className="card-text"><strong>30/09/2021 - 07/10/2021</strong></p>
                                <p className="card-text ps-2"></p>· Matrícula para o período 2021.2.


                                <a href="#" className="btn btn-primary">Saber mais...</a>
                            </div>
                        </div>

                    </article>
                    <article className="col-xl-6 pt-2">
                        <div className="card sombra sombraCard">
                            <figure>
                                <img src={Calen} className="card-img-top" alt="..."/>
                            </figure>
                            <div className="card-body">
                                <h5 className="card-title">Notícias</h5>
                                <p className="card-text">Veja abaixo as noticias referentes ao nosso Curso.</p>
                                <p className="card-text">CALENDÁRIO PARA PROJETO DE TRABALHO DE CONCLUSÃO DE CURSO
                                    ANO/SEMESTRE 2022.1</p>
                                <p className="card-text">» SEMANA DE DEFESA DE TRABALHOS DE CONCLUSÃO DE CURSO -
                                    ANO/SEMESTRE 2021.2</p>
                                <p className="card-text">» PLANO DE CURSO DAS DISCIPLINAS DE 2021.2</p>


                                <a href="#" className="btn btn-primary">Saber mais...</a>
                            </div>
                        </div>

                    </article>

                </div>


            </div>
        </main>


);
}




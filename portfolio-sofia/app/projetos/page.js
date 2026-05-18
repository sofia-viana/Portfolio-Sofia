import Nav from "@/components/Nav"; 

export default function Projetos() {
    return(
        <>
        <Nav/>
        <div className="container">
            <h1>Projetos</h1>

            <div className="card">
                <h2>Análise de Dados</h2>
                <p>Projeto de análise de dados e criação de gráfico de cancelamento de cliente utilizando Python e bibliotecas como Pandas e Matplotlib.</p>
                <a href="https://github.com/sofia-viana/analisedecancelamentos" target="_blank">
                    Acesse o projeto
                </a>
            </div>
            <div className="card">
                <h2>Automação Python</h2>
                <p>automatizar processos repetitivos utilizando Python.</p>
                <a href="https://github.com/sofia-viana/automa-o" target="_blank">
                    Acesse o projeto
                </a>
            </div>
        </div>
        </>
    )
}
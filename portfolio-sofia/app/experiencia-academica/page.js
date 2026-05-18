import Nav from "@/components/Nav";


export default function Academica() {
    return(
        <>
        <Nav/>
        <page/>
        <div className="container">
            <h1>Experiência Acadêmica</h1>

            <div className="card">
                <h2>Universidade Católica de Pernambuco</h2>
                <p>Curso: Sistemas para Internet</p>
            </div>
            <div className="card">
                <h2>ETE Cícero Dias</h2>
                <p>Programação de Jogos Digitais</p>
            </div>
        </div>
        </>
    )
}
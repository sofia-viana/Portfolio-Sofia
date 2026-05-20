import Nav from "@/components/Nav";


export default function Academica() {
    return(
        <>
        <Nav/>
        <page/>
        <div className="container">
            <h1>Experiência Acadêmica</h1>
            <div className="card">
                <h2>ETE Cícero Dias</h2>
                <p>Programação de Jogos Digitais</p>
                <p>2022 - 2024</p>
            </div>

            <div className="card">
                <h2>Universidade Católica de Pernambuco</h2>
                <p>Sistemas para Internet</p>
                <p>2025 - 2027</p>
            </div>
        </div>
        </>
    )
}
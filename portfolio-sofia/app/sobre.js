import nav from "@/components/Nav";

export default function Sobre() {
    return (
        <>
            <nav />
            <div className="container">
                <h1>Sobre</h1>
                <div className="card">
                    <p>
                        Projeto desenvolvido com React, Next e consumo de API para disciplina Front-end.
                    </p>
                    <h3>Tecnologias:</h3>
                    <ul>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>Axios</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
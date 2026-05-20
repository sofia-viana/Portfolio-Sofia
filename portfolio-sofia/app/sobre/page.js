import Nav from "@/components/Nav";

export default function Sobre() {
    return (
        <>
            <Nav />
            <div className="container">
                <h1>Sobre</h1>
                <div className="card">
                <p>Projeto desenvolvido com React e Next.js.</p>
                <h3>Tecnologias:</h3>
                    <ul>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
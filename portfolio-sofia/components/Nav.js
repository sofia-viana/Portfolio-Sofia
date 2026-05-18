import Link from "next/link";

export default function Nav(){
    return (
      <nav>
        <div className = "container">
            <Link href = "/">Home</Link>
            <Link href="/sobre">
             Sobre
            </Link>

            <Link href= "/experiencia-academica">
              Experiência Acadêmica
            </Link>
            <Link href= "/experiencia-profissional">
              Experiência Profissional
            </Link>

            <Link href= "/projetos">
              Projetos
            </Link>
        </div>
      </nav>
    )
}
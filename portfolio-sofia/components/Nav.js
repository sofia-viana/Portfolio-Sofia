import Link from "next/link";

export default function Nav(){
    return (
        <div className = "nav">
            <Link href = "/">Home</Link>
            <Link href="/sobre">
             Sobre
            </Link>

            <Link href= "/experiencia-academica">
              Experiência Acadêmica
            </Link>

            <Link href= "/projetos">
              Projetos
            </Link>
        </div>
    )
}
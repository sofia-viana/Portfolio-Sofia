import Link from "next/link";

export default function Nav(){
    return (
      <nav>
            <Link href = "/">Home</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href= "/experiencia-academica">Experiência Acadêmica</Link>
            <Link href= "/experiencia-profissional">Experiência Profissional</Link>
            <Link href= "/projetos">Projetos</Link>
      </nav>
    )
}
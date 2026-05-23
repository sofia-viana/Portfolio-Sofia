import Nav from "@/components/Nav";

async function getQuote() {
  try {
    const response = await fetch(
      'https://dummyjson.com/quotes/random',
      {
      cache: 'no-store'
      }
  )
  return response.json();

}catch{
  return{
    quote:'Nunca desista dos seus objetivos',
    author: 'Autor Desconhecido'

  }
} 
}

export default async function Home() {
  const data = await getQuote();
  return(
    <>
    <Nav/>
    <div className="container">
      <section className="hero">
        <h1>Sofia Viana</h1>
        <p>Estudante de Sistemas para Internet, com foco em desenvolvimento web e análise de dados</p>
      </section>
      <section className="quote">
        <h2> Frase</h2>
        <p>"{data.quote}"</p>
        <strong>{data.author}</strong>
      </section>
      <section>
        <br></br>
        <br></br>
          <h2 className="title">
            Tecnologias
          </h2>

          <p className="subtitle">
            Ferramentas que utilizo nos projetos
          </p>

          <div className="grid">

            <div className="card">
              <h2>React</h2>
              <p>
                Criação de interfaces modernas.
              </p>
            </div>

            <div className="card">
              <h2>Next.js</h2>
              <p>
                Framework React para aplicações
                rápidas e otimizadas.
              </p>
            </div>

            <div className="card">
              <h2>Python</h2>
              <p>
                Automação de processos e análise
                de dados.
              </p>
            </div>
              <div className="card">
              <h2>SQL</h2>
              <p>
                Para consultas de comparação de infraestruturas escolares rurais e urbanas da Região Norte do Brasil.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>   
  )
}

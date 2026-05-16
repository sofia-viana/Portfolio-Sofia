import Nav from "@/components/Nav";
import getService from "@/services/qService";

export default async function Home() {
  const service = await getService();

  return (
    <>
      <Nav />

      <div className="container">
        <h1>Sofia Viana</h1>
        <p>Estudante de Sistemas para Internet</p>

        <div className="card">
          <h2>Frase Motivacional</h2>

          <p>"{service.content}"</p>

          <strong>{service.author}</strong>
        </div>
      </div>
    </>
  );
}


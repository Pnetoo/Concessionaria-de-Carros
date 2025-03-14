import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo à Concessionária de Carros</h1>
      <Link href="/listaCarros">
        <button>Ver Lista de Carros</button>
      </Link>
    </div>
  );
}
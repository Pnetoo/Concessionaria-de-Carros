import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Mercadinho</h1>
      <Link href="/listaProdutos">
        <button>Ver Lista de Produtos</button>
      </Link>
    </div>
  );
}
import { produtosData } from "@/data/ProdutosData";
import Link from "next/link";

export default function ListaProduto() {
  return (
    <div>
      <h1>Produtos Disponíveis</h1>
      <ul>
        {produtosData.map((produto) => (
          <li key={produto.id}>
            <img src={produto.foto} alt={produto.nome} width={200} />
            <h2>{produto.nome}</h2>
            <Link href={`/DetalheProduto/${produto.id}`}>
              <button>Ver Detalhes</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
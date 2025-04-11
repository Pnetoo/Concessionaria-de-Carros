import { produtosData } from "@/data/ProdutosData";
import Link from "next/link";

export default function DetalheProduto({ params }: { params: { id: string } }) {
  const produtoId = parseInt(params.id);

  const produto = produtosData.find((produto) => produto.id === produtoId);

  if (!produto) {
    return (
      <div>
        <h1>Produto não encontrado</h1>
        <Link href="/listaProdutos">
          <button>Voltar para a Lista</button>
        </Link>
      </div>
    );
  }
  //
  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <img src={produto.foto} alt={produto.nome} />
      <h2>{produto.nome}</h2>
      <p>Preço: R$ {produto.preco}</p>
      <Link href="/listaProdutos">
        <button>Voltar para a Lista</button>
      </Link>
    </div>
  );
}
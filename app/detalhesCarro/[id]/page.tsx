import { carrosData } from "@/data/carrosData";
import Link from "next/link";

export default function DetalhesCarro({ params }: { params: { id: string } }) {
  const carroId = parseInt(params.id);

  const carro = carrosData.find((carro) => carro.id === carroId);

  if (!carro) {
    return (
      <div>
        <h1>Carro não encontrado</h1>
        <Link href="/listaCarros">
          <button>Voltar para a Lista</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="detalhes-carro">
      <h1>Detalhes do Carro</h1>
      <img src={carro.foto} alt={carro.modelo}/>
      <h2>{carro.modelo}</h2>
      <p>Ano: {carro.ano}</p>
      <p>Preço: R$ {carro.preco}</p>
      <p>Especificações: {carro.especificacoes}</p>
      <Link href="/listaCarros">
        <button>Voltar para a Lista</button>
      </Link>
    </div>
  );
}
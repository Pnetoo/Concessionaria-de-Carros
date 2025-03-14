import Link from "next/link";
import { Carro } from "@/data/carrosData"; // Importação corrigida

interface CarroCardProps {
  carro: Carro;
}

export default function CarroCard({ carro }: CarroCardProps) {
  return (
    <div className="carro-card">
      <img src={carro.foto} alt={carro.modelo} width={200} />
      <h2>{carro.modelo}</h2>
      <p>Ano: {carro.ano}</p>
      <Link href={`/detalhesCarro/${carro.id}`}>
        <button>Ver Detalhes</button>
      </Link>
    </div>
  );
}
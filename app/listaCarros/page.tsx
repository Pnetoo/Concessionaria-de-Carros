import { carrosData } from "@/data/carrosData";
import Link from "next/link";

export default function ListaCarros() {
  return (
    <div>
      <h1>Carros Disponíveis</h1>
      <ul>
        {carrosData.map((carro) => (
          <li key={carro.id}>
            <img src={carro.foto} alt={carro.modelo} width={200} />
            <h2>{carro.modelo}</h2>
            <Link href={`/detalhesCarro/${carro.id}`}>
              <button>Ver Detalhes</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
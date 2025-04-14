//IMPORTAÇÕES
import { Produto } from "@/types/produto"; 
import styles from "./CardProduto.module.css";
import Link from "next/link";

//FUNÇÃO PARA CARD DO PRODUTO
export default function CardProduto({ produto }: { produto: Produto }) {
  return (
    <div className={styles.card}>
      <img src={produto.thumbnail} alt={produto.title} className={styles.img} />
      <h2>{produto.title}</h2>
      <p>R$ {produto.price}</p>
      <Link href={`/produto/${produto.id}`}>
        <button>Ver Detalhes</button>
      </Link>
    </div>
  );
}

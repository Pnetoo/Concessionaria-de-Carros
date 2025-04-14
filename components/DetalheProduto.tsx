//IMPORTAÇÕES

import { Produto } from "@/types/produto"; 
import styles from "./DetalheProduto.module.css";

//FUNÇÃO PARA OS DETALHES DE CADA PRODUTO
export default function DetalheProduto({ produto }: { produto: Produto }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{produto.title}</h1>
      <img src={produto.thumbnail} alt={produto.title} className={styles.image} />
      <p className={styles.text}>{produto.description}</p>
      <p className={styles.label}><strong>Preço:</strong> R$ {produto.price}</p>
      <p className={styles.label}><strong>Categoria:</strong> {produto.category}</p>
      <p className={styles.label}><strong>Avaliação:</strong> {produto.rating}</p>
    </div>
  );
}

//IMPORTAÇÕES

import { useEffect, useState } from "react";
import api from "@/services/api";
import { Produto } from "@/types/produto"; 
import CardProduto from "@/components/CardProduto";
import styles from "@/styles/Home.module.css";

// PÁGINA INICIAL DOS PRODUTOS
export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    api.get("/products").then((res) => {
      setProdutos(res.data.products); 
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Catálogo de Produtos</h1>

      <div className={styles.grid}>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

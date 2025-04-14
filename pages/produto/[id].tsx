// Importa o método para executar código no servidor antes da renderização
import { GetServerSideProps } from "next";
//IMPORTAÇÕES
import api from "@/services/api";
import { Produto } from "@/types/produto";
import DetalheProduto from "@/components/DetalheProduto";
import Link from "next/link";
import styles from "@/styles/DetalhePage.module.css";

// Componente da página de detalhes de um produto COM BOTÃO PARA NAVEGAÇÃO PARA A LISTA TOTAL
export default function ProdutoPage({ produto }: { produto: Produto }) {
  return (
    <div className={styles.page}>
      <DetalheProduto produto={produto} />
      <div className={styles.backButtonWrapper}>
        <Link href="/">
          <button className={styles.backButton}>Voltar</button>
        </Link>
      </div>
    </div>
  );
}

// Função que roda no servidor e busca os dados do produto com base no ID da URL
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!; // Extrai o ID dos parâmetros da URL

  // Faz requisição para buscar os dados do produto específico
  const response = await api.get(`/products/${id}`);

  return {
    props: {
      produto: response.data, // Retorna os dados como prop
    },
  };
};

import axios from "axios"
// Define a estrutura (interface) dos dados de um produto
interface Produto {
    id: number // Identificador único do produto
    nome: string // Nome do produto
    preço: number // Preço unitário
    foto: string // URL da imagem
}
export default async function ProdutoPage({ params }: { params: { id: string } }) {
    const res = await axios.get("https://dummyjson.com/carts")

    const produtos = res.data.carts.flatMap((cart: any) => cart.products)
    const idBuscado = Number(params.id)
    const produtoEncontrado = produtos.find((item: any) => item.id === idBuscado)
    const produto: Produto | undefined = produtoEncontrado
    // Verifica se o produto foi encontrado
    if (!produto) {
        return <p>Produto não encontrado</p>
    }
    // Se o produto foi encontrado, renderiza seus dados na tela
    return (
        <div style={{ padding: "32px" }}>
            <h1>{produto.nome}</h1>
            <img src={produto.foto} alt={produto.foto} width={200} />
            <p><strong>Preço:</strong> ${produto.preço}</p>
        </div>
    )
}
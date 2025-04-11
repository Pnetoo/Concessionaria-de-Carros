export type Produto = {
  id: number;
  nome: string;
  foto: string;
  preco: number;
};

export const produtosData: Produto[] = [
  {
    id: 1,
    nome: "Golfinho",
    foto: "/img/golfinho.png",
    preco: 4000000
  },
  {
    id: 2,
    nome: "Pandinha",
    foto: "/img/panda.png",
    preco: 260000
  },
  {
    id: 3,
    nome: "Mini Cooper S",
    foto: "/img/minicoopers.png",
    preco: 250000
  },
];
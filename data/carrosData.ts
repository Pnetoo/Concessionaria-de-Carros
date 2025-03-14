export type Carro = {
  id: number;
  modelo: string;
  foto: string;
  ano: number;
  preco: number;
  especificacoes: string;
};

export const carrosData: Carro[] = [
  {
    id: 1,
    modelo: "Ford GT",
    foto: "/img/2017-Ford-GT-front-three-quarters.jpg",
    ano: 2017,
    preco: 4000000,
    especificacoes: "Motor 3.5, V6 Aspirado",
  },
  {
    id: 2,
    modelo: "Ford Bronco",
    foto: "/img/2025-ford-bronco.jpg",
    ano: 2025,
    preco: 260000,
    especificacoes: "Motor 2.0L Turbo EcoBoost GTDi",
  },
  {
    id: 3,
    modelo: "Ford Mustang",
    foto: "/img/ford_mustang.jpg",
    ano: 2020,
    preco: 250000,
    especificacoes: "Motor 5.0 V8, automático, 2 portas.",
  },
];
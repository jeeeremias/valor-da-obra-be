const PORCENTAGEM = 0.0844;
const itemsPiso = [
  {name: "Piso Cerâmico 45x45", unit: "m²", factor: 1.2, price: 28.9},
  {name: "Assentamento de Piso Cerâmico", unit: "m²", factor: 1, price: 24.6},
  {name: "Assentamento de Rodapé Cerâmico", unit: "m²", factor: 1, price: 11.2},
  {name: "Argamassa ACI 20kg", unit: "kg", factor: 5.6, price: 2.5},
  {name: "Espaçador Plástico 3mm", unit: "un", factor: 7, price: 0.14},
  {name: "Rejunte Flexível", unit: "kg", factor: 0.22, price: 4},
]

module.exports = (valorTotal, areaUtil) => {
  const totalBudget = valorTotal * PORCENTAGEM;
  const pisoBudget = itemsPiso.map(item => {
    let qt = item.factor * areaUtil;
    return {name: item.name, quantity: qt, totalPrice: qt * item.price, unitPrice: item.price}
  });
  const totalPisoBudget = pisoBudget.map(i => i.totalPrice).reduce((v1, v2) => v1 + v2, 0);

  return {
    name: "Revestimento",
    totalBudget: totalBudget,
    steps: [
      {
        name: "Piso",
        totalBudget: totalPisoBudget,
        detailedBudget: pisoBudget
      },
      {
        name: "Azulejo",
        totalBudget: totalBudget - totalPisoBudget,
        detailedBudget: []
      }
    ]
  };
}
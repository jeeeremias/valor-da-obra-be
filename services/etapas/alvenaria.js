const PORCENTAGEM = 0.0696;
module.exports = (valorTotal) => {
  return {
    name: "Alvenaria",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "A alvenaria convencional é feita com concreto armado e tem como função primordial a vedação com a construção de paredes que vão separar os ambientes, além do fechamento de vãos entre vigas e pilares."
  }
}
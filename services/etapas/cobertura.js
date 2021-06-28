const PORCENTAGEM = 0.0384;
module.exports = (valorTotal) => {
  return {
    name: "Cobertura",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "A principal função das coberturas é a proteção das edificações, contra a ação das intempéries."
  }
}